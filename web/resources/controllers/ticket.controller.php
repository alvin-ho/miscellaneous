<?php

require_once dirname( __DIR__ ) . '/global.inc.php';

if( !isset( $_GET['_q'] ) ){
  http_response_code( 403 );
  die( '403 Forbidden' );
}

try {

  $getArr = $_GET;

  $db = initDataBase();
  if( !$db['isConnected'] ){
    throw new Exception( 'Database connection failure: ' . $db['err'] );
  }

  $code = base64_decode( $getArr['_q'] );

  $query = '
    SELECT active
    FROM registrations, photobooth
    WHERE redeem_code = ? AND redeem_code = code
  ';

  // check validailty of the redeem code
  $record = R::getRow( $query, [ $code ] );

  if( sizeof( $record ) == 0 ){ // no record has been retrieved
    http_response_code( 403 );
    die( '403 Forbidden' );
  }
  
} catch ( Exception $e ) {
  log_error( $_SERVER['REQUEST_URI'], json_encode( $_REQUEST ), $ex->getMessage() );
  http_response_code( 503 );
  die( 'Service unavailable' );
}
