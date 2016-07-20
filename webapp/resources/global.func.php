<?php
// function initDataBase( $config = array() )
// {
//
// 	global $SYSCONFIG;
// 	extract( $SYSCONFIG['DB'] );
// 	return new database( $HOST, $NAME, $USER, $PSW );
// }

function initDataBase( $config = array() )
{

	global $SYSCONFIG;
	extract( $SYSCONFIG['DB'] );

	$returnStat = array( 'isConnected' => false, 'err' => null );

	try {

		R::setup( "mysql:host={$HOST};dbname={$NAME}", $USER, $PSW );

		if( _ENV != 'prod' ){
			//R::fancyDebug( TRUE ); // enable debugging mode
			R::freeze( TRUE ); // dynamically changes the structure of the database. DEV ONLY
		}

		if( !$returnStat['isConnected'] = R::testConnection() ){
			$errArr = error_get_last();
			throw new Exception( $errArr['message'] );
		}

	} catch ( Exception $ex ) {
		$returnStat['err'] = $ex->getMessage();
	}

	return $returnStat;
}

function check_session()
{

	global $GSESSION_PREFIX, $GSESSION_MAX_LIFETIME;
	if(!session_id()){session_start();}
	if (!isset($_SESSION[$GSESSION_PREFIX . 'last_access']) || (time() - $_SESSION[$GSESSION_PREFIX . 'last_access']) > $GSESSION_MAX_LIFETIME) {
		//Timeout
		session_destroy();

		return false;
	} else {
		//Reset time
		$_SESSION[$GSESSION_PREFIX . 'last_access'] = time();
		return true;
	}
}

function responseJSON( $msg = '', $code = 400, $status = '' )
{

	if( is_array( $msg ) ){
		die( json_encode( $msg ) );
	}else{
		die( json_encode( array( 'code' => $code, 'err' => $msg, 'status' => $status	) ) );
	}
}

function sendMail( $settings = array() )
{

	global $SYSCONFIG;

	$mail = new PHPMailer;
	$mail->isSMTP();
	$mail->Host = $SYSCONFIG['SMTP']['HOST'];								// HOST
	$mail->Port = $SYSCONFIG['SMTP']['PORT'];								// PORT
	$mail->SMTPAuth = $SYSCONFIG['SMTP']['SMTPAuth'];
	if( !is_null( $SYSCONFIG['SMTP']['SMTPSecure'] ) ){
		$mail->SMTPSecure = $SYSCONFIG['SMTP']['SMTPSecure'];
	}
	$mail->Username = $SYSCONFIG['SMTP']['USERNAME'];				// SMTP username
	$mail->Password = $SYSCONFIG['SMTP']['PASSWORD'];   		// SMTP password
	$mail->From = $SYSCONFIG['SMTP']['SENDER_EMAIL']; 			// SENDER ADDRESS
	$mail->FromName = $SYSCONFIG['SMTP']['SENDER_NAME']; 		// SENDER NAME
	$mail->CharSet = 'UTF-8';
	// $mail->WordWrap = 900; // RFC 2822 Compliant for Max 998 characters per line

	foreach ( $settings['recipients'] as $key => $recipient ) {
		$mail->addAddress( $recipient['addr'], $recipient['name'] );
	}

	$mail->IsHTML( true );
	$mail->Subject = $settings['subject'];
	$mail->Body = $settings['content'];

	if ( !$mail->send() ) {
		$dataSet["status"] = "2";
		$dataSet["msg"] = $mail->ErrorInfo;
	} else {
		$dataSet["status"] = "1";
	}

	$mail->ClearAddresses();

	return $dataSet;
}

function log_error( $source = null, $data = null, $error = null )
{

	global $SYSCONFIG;

	require_once( dirname( __FILE__ ) . '/classes/ErrorLogger.class.php' );

	$configs = $SYSCONFIG['LOG'];
	$configs['filename'] = date( 'Y-m-d' ) . '.txt';
	$configs['uri'] = $source;
	$configs['data'] = $data;
	$configs['exception'] = $error;

	$log = new ErrorLogger( $configs );
	return $log->logFile();
	// return $log->logDatabase();
}

function email_log( $result = array() )
{
	global $mysql;

	$query = "
		INSERT INTO `email_log` ( `email`, `status`, `exception`, `create_date` )
		VALUES ( ?, ?, ?, ? )
		";
	return $mysql->execute( $query, $result ) ? true : $mysql->error;
}

function url_shortner( $url = '', $keyword = null )
{

	global $SYSCONFIG;

	if( $url == '' ){
		return null;
	}

	$returnArr = array( 'hasError' => false );

	$pp_shortener = $SYSCONFIG['shortener'];

	$url = $pp_shortener['url']
	. '?username=' . urlencode( $pp_shortener['username'] )
	. '&password=' . urlencode( $pp_shortener['password'] )
	. '&action=' . urlencode( $pp_shortener['action'] )
	. '&url=' . urldecode( $url )
	. '&format=' . urlencode( $pp_shortener['format'] )
	. '&title=' . urlencode( $pp_shortener['title'] );

	if( !is_null( $keyword ) ){
		$url .= '&keyword=' . urlencode( $keyword );
	}

	$return_json = file_get_contents( $url );
	$result = json_decode( $return_json, true );

	if ( $result['statusCode'] != 200 || !isset( $result['shorturl'] ) ) {
		$returnArr['hasError'] = true;
		$returnArr['err'] = $result['message'];
	}else{
		$returnArr['shorturl'] = $result['shorturl'];
	}

	return $returnArr;
}

function credentialkey( $length = 10 )
{
	$characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	$randomString = '';
	for ( $i = 0; $i < $length; $i++ ) {
		$randomString .= $characters[ rand( 0, strlen( $characters ) -1 ) ];
	}
	return $randomString;
}

if ( function_exists('array_column') === false ) {

    function array_column(array $input, $columnKey, $indexKey = null)
		{
        $array = array();
        foreach ($input as $value) {
            if ( ! isset($value[$columnKey])) {
                // trigger_error("Key \"$columnKey\" does not exist in array");
                return false;
            }
            if (is_null($indexKey)) {
                $array[] = $value[$columnKey];
            }
            else {
                if ( ! isset($value[$indexKey])) {
                    // trigger_error("Key \"$indexKey\" does not exist in array");
                    return false;
                }
                if ( ! is_scalar($value[$indexKey])) {
                    // trigger_error("Key \"$indexKey\" does not contain scalar value");
                    return false;
                }
                $array[$value[$indexKey]] = $value[$columnKey];
            }
        }
        return $array;
    }
}
