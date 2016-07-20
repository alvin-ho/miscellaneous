<?php
$queryString = strlen( $_SERVER["QUERY_STRING"] ) > 0 ? '?'. $_SERVER["QUERY_STRING"] : '';

if(!preg_match('/(ipad|alcatel|amoi|android|avantgo|blackberry|benq|cell|cricket|docomo|elaine|htc|iemobile|iphone|ipod|j2me|java|midp|mini|mmp|motorola|nec-|nokia|palm|panasonic|philips|phone|playbook|sagem|sharp|sie-|silk|smartphone|sony|symbian|t-mobile|telus|up\.browser|up\.link|vodafone|wap|webos|wireless|xda|xoom|zte)/i', $_SERVER['HTTP_USER_AGENT'])){
	header( "Location: html/index.php".$queryString, 1, 302);
}else{
	header( "Location: html/index.php".$queryString, 1, 302);
}
die();
?>
