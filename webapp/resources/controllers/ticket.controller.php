<?php

require_once dirname( __DIR__ ) . '/global.inc.php';

if( !isset( $_GET['_q'] ) ){
  http_response_code( 403 );
  die( '403 Forbidden' );
}

try {

  $db = initDataBase();
  if( !$db['isConnected'] ){
    throw new Exception( 'Database connection failure: ' . $db['err'] );
  }

  $code = base64_decode( $_GET['_q'] );

  // check validailty of the redeem code
  $record = R::findOne( 'registrations', ' redeem_code = ? ', [ $code ] );

  if( is_null( $record ) ){ // no record has been retrieved
    http_response_code( 403 );
    die( '403 Forbidden' );
  }

  // init registration info
  $info = [
    'name'    => $record->name,
    'mobile'  => $record->phone,
    'addr'    => $shops[ $record->shop_id ]['name'],
    'date'    => $shops[ $record->shop_id ]['periods'][ $record->period_id ]['date'],
    'code'    => $code,
    'valid'   => ( $record->redeemed == 0 ? true : false )
  ];

  // init session
  if( $record->redeemed == 0 ){
    $_SESSION['redemption'] = $code;
  }

  include_once dirname( __DIR__ ) .'/../html/redeem.html';

} catch ( Exception $e ) {
  http_response_code( 503 );
  die( 'Service unavailable' );
}

die();
