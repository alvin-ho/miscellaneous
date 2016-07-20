<?php

set_time_limit( 0 );

$digit = isset( $_GET['d'] ) ? $_GET['d'] : 5;
$repeat = isset( $_GET['r'] ) ? true : false;
$total = isset( $_GET['t'] ) ? $_GET['t'] : 1000;

// $returnArr = [ 'code' => [], 'duration' => 0 ];

// $start = microtime( true );

$list = [];

$count = 0;

while ( $count <= $total ) {

	$str = '';
	$ints = range( 0, 9 );
	$chars = range( 'a', 'z' );

	// push alphabets
	for ( $i = 0; $i < $digit / 2 ; $i++ ) {

		$rand = mt_rand( 0, sizeof( $chars ) - 1 );
		$str .= $chars[ $rand ];
		if( $repeat ){
			array_splice( $chars, $rand, 1 );
		}
	}

	// push integers
	for ( $j = $digit / 2;  $j < $digit;  $j++ ) {
		$rand = mt_rand( 0, sizeof( $ints ) - 1 );
		$str .= $ints[ $rand ];
		if( $repeat ){
			array_splice( $ints, $rand, 1 );
		}
	}

	$code = str_shuffle( $str );

	if( !in_array( $code, $list ) ){
		$list[] = $code;
		$count++;
	}

}

header('Content-Description: File Transfer');
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="cods.txt"');
header('Expires: 0');
header('Cache-Control: must-revalidate');
header('Pragma: public');

$fiveMBs = 5 * 1024 * 1024;
$fp = fopen( "php://temp/maxmemory:$fiveMBs", 'r+' );

fputs( $fp, implode( "\r\n", $list ) );

// Read what we have written.
rewind( $fp );

echo stream_get_contents( $fp );

die();


?>
