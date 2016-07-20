<?php

require_once dirname( __DIR__ ) . '/global.inc.php';

$showLikeGate = 0;

if(!preg_match('/(ipad|alcatel|amoi|android|avantgo|blackberry|benq|cell|cricket|docomo|elaine|htc|iemobile|iphone|ipod|j2me|java|midp|mini|mmp|motorola|nec-|nokia|palm|panasonic|philips|phone|playbook|sagem|sharp|sie-|silk|smartphone|sony|symbian|t-mobile|telus|up\.browser|up\.link|vodafone|wap|webos|wireless|xda|xoom|zte)/i', $_SERVER['HTTP_USER_AGENT'])){
  $platform = 'desktop';
}else{
  $platform = 'mobile';

  // show like gate after redirect login success
  $showLikeGate = ( !isset( $_GET['error'] ) && isset( $_GET['code'] ) ? 1 : 0 );
}

$end = ( strtotime( END_DATE ) <= time() ? true : false );
