<?php

include_once dirname( __DIR__ ) . "/resources/global.inc.php";
require_once dirname( __DIR__ ) . '/resources/lib/PHPExcel/PHPExcel.php';

try {

	$db = initDataBase();

	if( !$db['isConnected'] ){
		throw new Exception( 'Database connection failure: ' . $db['err'] );
	}

	$records = R::findAll( 'vipmaster' );

	$excel = new PHPExcel();

	// Set Sheet
	$excel->setActiveSheetIndex( 0 );
	$excelSheet = $excel->getActiveSheet();
	$excelSheet->getDefaultStyle()->getNumberFormat()->setFormatCode( PHPExcel_Style_NumberFormat::FORMAT_TEXT );
	$boldStyle = array(
		"font" => array(
			"bold" => true
		)
	);

	// gen A-AZ
	$row = $row2 = array();
	foreach ( range('A', 'Z') as $letter ) {
		$row[] = $letter;
		$row2[] = 'A'.$letter;
	}
	$columRange = array_merge( $row, $row2 );

	$headerArr = array(
		'UID',
		'Email',
		'Title',
		'Last Name',
		'Location',
		'URL',
		'Suffix',
		'Unique Code',
	);

	foreach( $headerArr as $key => $header ){
		$excelSheet->setCellValue( $columRange[ $key ].'1', $header );
		$excelSheet->getColumnDimension( $columRange[ $key ] )->setAutoSize(true);
	}

	if( sizeof( $records ) > 0 ){

		foreach ( $records as $rowNum => $row ) {

			$i = 0;
			$_rowNum = $rowNum + 1;

			$excelSheet
				->getCell( $columRange[ $i++ ] . $_rowNum )
				->setValueExplicit( $row['uid'], PHPExcel_Cell_DataType::TYPE_STRING );

			$excelSheet->setCellValue( $columRange[ $i++ ].$_rowNum, $row['email'] );
			$excelSheet->setCellValue( $columRange[ $i++ ].$_rowNum, $row['title'] );
			$excelSheet->setCellValue( $columRange[ $i++ ].$_rowNum, $row['lastname'] );
			$excelSheet->setCellValue( $columRange[ $i++ ].$_rowNum, $row['location'] );
			$excelSheet->setCellValue( $columRange[ $i++ ].$_rowNum, $row['url'] );
			$excelSheet->setCellValue( $columRange[ $i++ ].$_rowNum, $row['mask'] );
			$excelSheet->setCellValue( $columRange[ $i++ ].$_rowNum, $row['code'] );

		}

	}

	// Reset position
	$excelSheet->getStyle("A1");

	// Redirect output to a client’s web browser (Excel5)
	$excel->setActiveSheetIndex(0);

	header("Content-Type: application/vnd.ms-excel; charset=utf-8");
	header("Content-Disposition: attachment;filename=VIP_List.xlsx");
	header("Expires: 0");
	header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
	header("Cache-Control: private", false);
	header("Pragma: public");

	$objWriter = PHPExcel_IOFactory::createWriter( $excel, 'Excel2007' );
	$objWriter->save( 'php://output' );

} catch ( Exception $ex ) {

	header("Content-Type: text/plain; charset=utf-8");
	die( $ex->getMessage() );
}

?>
