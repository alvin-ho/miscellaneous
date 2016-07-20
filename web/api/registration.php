<?php

header('Content-type: application/json; charset=UTF-8');

include_once dirname( __DIR__ ) . "/resources/global.inc.php";

if( $_SERVER['REQUEST_METHOD'] == 'POST' ){

	try {

		$postArr = $_POST;
		$returnArr = [ 'code' => 200, 'status' => 0 ];

		// validate session
		if( !isset( $_SESSION['game_section'] ) ){
			responseJSON( '403 forbidden', 403 );
		}

		$session = $_SESSION['game_section'];

		// mandatory fields
		$mandatories = [ 'firstname', 'lastname', 'email' ];

		foreach ( $mandatories as $key ) {
			if( !isset( $postArr[ $key ] ) ){
				responseJSON( 'invalid request' );
			}
		}

		$db = initDataBase();

		if( !$db['isConnected'] ){
			throw new Exception( 'Database connection failure: ' . $db['err'] );
		}

		$conditions = ' submission_id = ? OR email = ? ';

		$exist_record = R::find( 'registrations', $conditions, [ $session['submission_id'], $postArr['email'] ] );

		if( sizeof( $exist_record ) > 0 ){

			$returnArr['code'] = 400;
			$returnArr['status'] = 1;
			$returnArr['err'] = [ 'ref' => 0, 'email' => 0 ];

			foreach ( $exist_record as $key => $record ) {

				if( $record->email == $postArr['email'] ){
					$returnArr['err']['email'] = 1;
				}

				if( $record->submission_id == $session['submission_id'] ){
					$returnArr['err']['ref'] = 1;
				}

			}

		}else{

			// insert record

			$record = R::dispense( 'registrations' );

			$record->title = $postArr['title'];
			$record->firstname = $postArr['firstname'];
			$record->lastname = $postArr['lastname'];
			$record->email = $postArr['email'];

			$record->wine_id = isset( $session['wine_id'] ) ? $session['wine_id'] : null ;
			$record->submission_id = isset( $session['submission_id'] ) ? $session['submission_id'] : null ;
			$record->mixer = isset( $session['mixer'] ) ? $session['mixer'] : null ;
			$record->trimming_1 = isset( $session['trimming_1'] ) ? $session['trimming_1'] : null ;
			$record->trimming_2 = isset( $session['trimming_2'] ) ? $session['trimming_2'] : null ;
			$record->trimming_3 = isset( $session['trimming_3'] ) ? $session['trimming_3'] : null ;
			$record->spirit = isset( $session['spirit'] ) ? $session['spirit'] : null ;

			$record->create_date = date( 'Y-m-d H:i:s' );
			$record->ipaddress = $_SERVER['REMOTE_ADDR'];
			$record->useragent = isset( $_SERVER['HTTP_USER_AGENT'] ) ? $_SERVER['HTTP_USER_AGENT'] : null;
			R::store( $record );

			unset( $_SESSION['game_section'] );

			$_SESSION['registration'] = [
				'id' => R::getInsertID()
			];

		}

	} catch ( Exception $ex ) {

		$returnArr['code'] = 500;
		if( _ENV != 'prod' ){
			$returnArr['err'] = $ex->getMessage();
		}
		log_error( $_SERVER[ 'REQUEST_URI' ], json_encode( $_REQUEST ), $ex->getMessage() );

	}

	responseJSON( $returnArr );
}

?>
