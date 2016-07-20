<?php

require_once dirname( __DIR__ ) . '/global.inc.php';

$pop = true;
if( isset( $_GET['_l'] ) && $_GET['_l'] == 1 ){

  // not logged in yet
  if( !isset( $_GET['error'] ) ){
    $pop = false;
  }
}

include_once dirname( __DIR__ ) .'/../html/form.html';
die();
