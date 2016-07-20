<?php
header('Content-type: application/json; charset=UTF-8');

include_once dirname( __DIR__ ) . "/resources/global.inc.php";

$returnArr = array( 'code' => 200 );

if( isset( $_REQUEST['id'] ) ){

	$reqArr = $_REQUEST;

	try{

		$db = initDataBase();

		if( !$db['isConnected'] ){
			throw new Exception( 'Database connection failure: ' . $db['err'] );
		}

		$record = R::findOne( 'facebookuser', ' fbid = ? ', [ $reqArr['id'] ] );

		if( is_null( $record ) ){

			$record = R::dispense( 'facebookuser' );
			$record->fbid = $reqArr['id'];
			$record->create_date = date('Y-m-d H:i:s');
		}else{
			$record->last_update = date('Y-m-d H:i:s');
		}

		$record->name = isset( $reqArr['name'] ) ? $reqArr['name'] : null;
		$record->email = isset( $reqArr['email'] ) ? $reqArr['email'] : null;
		$record->gender = isset( $reqArr['gender'] ) ? $reqArr['gender'] : null;
		$record->first_name = isset( $reqArr['first_name'] ) ? $reqArr['first_name'] : null;
		$record->last_name = isset( $reqArr['last_name'] ) ? $reqArr['last_name'] : null;
		$record->locale = isset( $reqArr['locale'] ) ? $reqArr['locale'] : null;
		$record->ipaddress = $_SERVER['REMOTE_ADDR'];
		$record->useragent = $_SERVER['HTTP_USER_AGENT'];

		R::store( $record );

		// create session
		$_SESSION['fbid'] = $reqArr['id'];

	}catch ( Exception $ex ) {

		$returnArr['code'] = 500;
		if( _ENV != 'prod' ){
			$returnArr['err'] = $ex->getMessage();
		}
		log_error( $_SERVER['REQUEST_URI'], json_encode( $reqArr ), $ex->getMessage() );
	}

}else{
	$returnArr['code'] = 400;
	$returnArr['err'] = 'invalid request';
}

responseJSON( $returnArr );

function exchangeToken($token = '') {

    global $FB_APP_SECRET, $FB_APP_ID;

    $url = sprintf("https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=%s&client_secret=%s&fb_exchange_token=%s", $FB_APP_ID, $FB_APP_SECRET, $token);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    $result = curl_exec($ch);

    $json = array();
    $jsonArray = explode('&', $result);
    foreach ($jsonArray as $value) {
        $keyValue = explode('=', $value);
        $json[$keyValue[0]] = $keyValue[1];
    }
    $json['access_token'] = base64_encode($json['access_token']);
//echo 'Status updated.';
    curl_close($ch);

    return $json['access_token'];
}

?>
