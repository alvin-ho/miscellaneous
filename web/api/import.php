<?php

header('Content-type: application/json; charset=UTF-8');

include_once dirname( __DIR__ ) . "/resources/global.inc.php";
require_once dirname( __DIR__ ) . '/resources/lib/PHPExcel/PHPExcel.php';

if( isset( $_FILES ) && isset( $_FILES['excel'] ) ){

	$file = $_FILES['excel'];
	$returnArr = [ 'code' => 200 ];

	if( ! preg_match( '/(vnd.openxmlformats|vnd.ms-excel)/', $file['type'] ) ){

		$returnArr['code'] = 400;
		$returnArr['err'] = 'invalid file format';

	}else{

		try {

			$upload_dir = dirname( __DIR__ ) . '/uploads/';
			$filename = time() . '.xlsx';

			if( !move_uploaded_file( $file['tmp_name'], $upload_dir.$filename ) ){

				$error = error_get_last();
				throw new Exception( $error['message'] );

			}

			if( !file_exists( $upload_dir.$filename ) ){
				throw new Exception( 'target file not found' );
			}

			$inputFileType = PHPExcel_IOFactory::identify( $upload_dir.$filename );
			$objReader = PHPExcel_IOFactory::createReader( $inputFileType );


			$spreadsheetInfo = $objReader->listWorksheetInfo( $upload_dir.$filename  );
			$totalRows = $spreadsheetInfo[0]['totalRows'];

			if( $totalRows > 0 ){

				$objPHPExcel = $objReader->load( $upload_dir.$filename );
				$dataArr = $objPHPExcel->getActiveSheet()->toArray( null, true, true, true );

				array_shift( $dataArr );

				$db = initDataBase();

				if( !$db['isConnected'] ){
					throw new Exception( 'Database connection failure: ' . $db['err'] );
				}

				$records = [];

				foreach( $dataArr as $row => $cell ){

					$code = empty( $cell['H'] ) ? null : $cell['H'];
					$mask = is_null( $code ) ? $code : base64_encode( $code );
					$link = sprintf( VIP_LANDING_URL, $mask );

					$records[ $row ] = R::dispense( 'vipmaster' );
					$records[ $row ]['uid'] = empty( $cell['A'] ) ? null : $cell['A'];
					$records[ $row ]['email'] = empty( $cell['B'] ) ? null : $cell['B'];
					$records[ $row ]['title'] = empty( $cell['C'] ) ? null : $cell['C'];
					$records[ $row ]['lastname'] = empty( $cell['D'] ) ? null : $cell['D'];
					$records[ $row ]['location'] = empty( $cell['E'] ) ? null : $cell['E'];
					$records[ $row ]['url'] = $link;
					$records[ $row ]['mask'] = $mask;
					$records[ $row ]['code'] = $code;
					$records[ $row ]['create_date'] = date( 'Y-m-d H:i:s' );
				}

				if( sizeof( $records ) > 0 ){
					R::wipe( 'vipmaster' );
					R::storeAll( $records );
				}

			}else{
				$returnArr['err'] = 'file is empty';
			}

		} catch ( Exception $ex ) {

			$returnArr['code'] = 400;
			$returnArr['err'] = $ex->getMessage();

		}

	}

	responseJSON( $returnArr );

}else{
	die( 'no file has been uploaded' );
}

?>
