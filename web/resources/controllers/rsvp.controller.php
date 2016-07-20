<?php

require_once dirname( __DIR__ ) . '/global.inc.php';
require_once dirname( __DIR__ ) . '/lib/phpmailer/PHPMailerAutoload.php';

if( !isset( $_GET['_q'] ) ){
	http_response_code( 403 );
	die( '403 Forbidden' );
}

$getArr = $_GET;

try {

	$db = initDataBase();
	if( !$db['isConnected'] ){
		throw new Exception( 'Database connection failure: ' . $db['err'] );
	}

	$code = base64_decode( $_GET['_q'] );

	// check validailty of the redeem code
	$record = R::findOne( 'vipmaster', ' code = ? ', [ $code ] );

	if( is_null( $record ) ){ // no record has been retrieved
		http_response_code( 403 );
		die( '403 Forbidden' );
	}

	// log click event
	$log = R::findOrCreate( 'clicklog', ['vipmaster_id' => $record->id]);
	if( is_null( $log->create_date ) ){
		$log->create_date = date( 'Y-m-d H:i:s' );
		$log->ipaddress = $_SERVER['REMOTE_ADDR'];
		R::store( $log );
	}

	// send confirmation Email
	if( $record->email_sent == 'N' ){

		$settings = [
			'content' => 'confirmation email',
			'subject' => $SYSCONFIG['SMTP']['subject'],
			'recipients' => [
				[
					'name' => $record->title . ' ' . $record->lastname,
					'addr' => $record->email
				]
			]
		];

		$result = sendMail( $settings );

		$email = R::dispense( 'emaillog' );
		$email->email = $record->email;
		$email->subject = $settings['subject'];
		$email->content = $settings['content'];
		$email->create_date = date( 'Y-m-d H:i:s' );

		if( $result['hasError'] ){
			$email->status = 0;
			$email->exception = $result['msg'];
		}else{
			$email->status = 1;

			// update email status
			$record->email_sent = 'Y';
			R::store( $record );
		}

		R::store( $email );
	}

} catch ( Exception $ex ) {
	log_error( $_SERVER['REQUEST_URI'], json_encode( $_REQUEST ), $ex->getMessage() );
	http_response_code( 503 );
	die( 'Service unavailable' );
}
