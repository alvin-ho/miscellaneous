<?php

require_once dirname( __DIR__ ) . '/global.inc.php';

try {

	$getArr = $_GET;
	$valid = true;

	$db = initDataBase();

	if( !$db['isConnected'] ){
		throw new Exception( 'Database connection failure: ' . $db['err'] );
	}

	$inputHash = isset( $getArr['secure_hash'] ) ? $getArr['secure_hash'] : '';

	unset( $getArr['secure_hash'] );

	// Sort the data by key in ascending order first
	ksort( $getArr );

	// Start with the secret
	$rawData = array( FORM_SECRET );

	// Append data to the raw data
	foreach( $getArr as $k => $v ) {
		$rawData[] = $v;
	}

	// Glue all raw data with "|" symbol to a string
	$string = implode( '|', $rawData );

	// validate the hash strings
	if( $inputHash != sha1( $string ) ){
		$valid = false;
	}else{

		$count = R::count( 'registrations', ' submission_id = ? ', [ $getArr['submission_id'] ] );
		if( $count > 0 ){
			http_response_code( 400 );
			die( 'multiple submission attempts' );
		}
	}

	// insert log
	$registration = R::dispense( 'formlog' );
	$registration->postdata = json_encode( $_GET );
	$registration->status = $valid ? 1 : 0;
	$registration->create_date = date( 'Y-m-d H:i:s' );
	$registration->ipaddress = $_SERVER['REMOTE_ADDR'];
	R::store( $registration );

	// hash strings not match
	if( !$valid ){
		http_response_code( 403 );
		die( '403 Forbidden' );
	}

	// cache in session
	if( !session_id() ){ session_start(); }
	$_SESSION['game_section'] = $getArr;

} catch ( Exception $e ) {
	log_error( $_SERVER['REQUEST_URI'], json_encode( $_REQUEST ), $ex->getMessage() );
	http_response_code( 503 );
	die( '503 Service unavailable' );
}
