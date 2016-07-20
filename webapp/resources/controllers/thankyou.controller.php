<?php

require_once dirname( __DIR__ ) . '/global.inc.php';

if( !isset( $_SESSION['fbid'] ) || !isset( $_SESSION['code'] ) ){
  header( 'Location: index.php', 302 );
  die();
}

extract( $SYSCONFIG['SERVER'] );
$mask = base64_encode( $_SESSION['code'] );
$sms = $_SESSION['sms_deliver'];
session_unset();

// redemption link
$link = $baseUrl . $subfolder . '/html/ticket.php?_q=' . $mask;

include_once dirname( __DIR__ ) .'/../html/thankyou.html';
die();
