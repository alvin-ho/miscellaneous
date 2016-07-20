<?php

header('Content-type: application/json; charset=UTF-8');

include_once dirname( __DIR__ ) . "/resources/global.inc.php";

$returnArr = [ 'code' => 200, 'list' => [] ];

try {

	$db = initDataBase();

	if( !$db['isConnected'] ){
		throw new Exception( 'Database connection failure: ' . $db['err'] );
	}

	// R::wipe( 'registrations' );
	// R::wipe( 'printlog' );

} catch ( Exception $ex ) {
	$returnArr['code'] = 500;
	if( _ENV != 'prod' ){
		$returnArr['err'] = $ex->getMessage();
	}
	log_error( $_SERVER[ 'REQUEST_URI' ], json_encode( $_REQUEST ), $ex->getMessage() );
}

responseJSON( $returnArr );
?>
