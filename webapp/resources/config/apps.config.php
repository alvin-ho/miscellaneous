<?php

$SYSCONFIG['SMTP']['sender_name'] 		= '';
$SYSCONFIG['SMTP']['sender_addr'] 		= '';
$SYSCONFIG['SMTP']['subject'] 			= '';

# Sessions settings
$GSESSION_PREFIX 		= "cms_prototype_";
$GSESSION_NAME 			= "ssid";
$GSESSION_MAX_LIFETIME	= 1800;

# SMS settings
$SYSCONFIG['SMS'] = array(
	'enable' 						=>	false,
	'account'						=> '',
	'pwd'							=> '',
	'sender'						=> '',
	'country_code'					=> '852',
	'message' 						=> "",
	'remarks'						=> "",
	'UserDefineNo'					=> ''
);

# Shorten URL
$SYSCONFIG['shortener'] = array(
	'username'						=> '',
	'password'						=> '',
	'action'						=> '',
	'format'						=> 'json',
	'title'							=> '',
	'keyword'						=> ''
);

$SYSCONFIG['FB']['ver'] 			= 'v2.6';
$SYSCONFIG['FB']['scope'] 			= 'email';
$SYSCONFIG['FB']['page_id'] 		= '';

$FB_SHARE = array();
$FB_SHARE['result'] = array(
	'title' 					=> "",
	'link' 						=> $SYSCONFIG['SERVER']['baseUrl'].$SYSCONFIG['SERVER']['subfolder'].'/index.php?s=share',
	'image' 					=> $SYSCONFIG['SERVER']['baseUrl'].$SYSCONFIG['SERVER']['subfolder'].'/images/share200x200.jpg',
	'caption' 					=> '',
	'description' 				=> ''
);

$FB_SHARE['custom'] = array(
	'title' 					=> "",
	'link' 						=> $SYSCONFIG['SERVER']['baseUrl'].$SYSCONFIG['SERVER']['subfolder'].'/index.php?s=share',
	'image' 					=> $SYSCONFIG['SERVER']['baseUrl'].$SYSCONFIG['SERVER']['subfolder'].'/images/share200x200.jpg',
	'caption' 					=> '',
	'description' 				=> ''
);

$FB_SHARE['generic'] = array(
	'title' 					=> "",
	'link' 						=> $SYSCONFIG['SERVER']['baseUrl'].$SYSCONFIG['SERVER']['subfolder'].'/index.php?s=share',
	'image' 					=> $SYSCONFIG['SERVER']['baseUrl'].$SYSCONFIG['SERVER']['subfolder'].'/images/share200x200.jpg',
	'caption' 					=> '',
	'description' 				=> ''
);

$SYSCONFIG['LOG'] = array(
	'schema'					=> 'errorlog',
	'target_path'				=>	$_SERVER['DOCUMENT_ROOT'] . '/logs/',
);

$FB_INVITE = array(
	'msg'						=>	''
);

$REDEMPTION = array(
	'psw'						=> ''
);

$QRCODE = array(
	'QR_CACHEABLE'				=> true,
	'QR_CACHE_DIR'				=> $_SERVER['DOCUMENT_ROOT'] . '/cache/',
	'QR_LOG_DIR'				=> $_SERVER['DOCUMENT_ROOT'] . '/logs/'
);

$REPORT = array(
	'sender_addr' 			=> 'system@noreply.com',
	'sender_name' 			=> '',
	'subject' 				=> '',
	'content' 				=> "
		<p>An exception has occurred when sending confirmation Email to the following recipient:</p>
		<p>
			<span>Code: %{code}</span><br />
			<span>Mobile: %{email}</span><br />
			<span>Exception: %{exception}</span><br />
		</p>
	",
	'recipients' => array(
		array( 'addr' => '', 'name' => '' ),
		array( 'addr' => '', 'name' => '' ),
	)
);

