<?php

define( '_ENV', 'prod' );

$SYSCONFIG = array();

# Server variable
$SYSCONFIG['SERVER'] = array(
	'subfolder'				=> '/',
	'baseUrl'				=> '',
	'shortURL'				=> ''
);

# Database setting
$SYSCONFIG['DB'] = array(
	'HOST'					=> '',
	'NAME'					=> '',
	'USER'					=> '',
	'PSW'					=> ''
);

# SMTP settings
$SYSCONFIG['SMTP'] = array(
	'host'					=> '',
	'port'					=> 25,
	'SMTPAuth'				=> false,
	'SMTPSecure'			=> null,
	'username'				=> null,
	'password'				=> null
);

# facebook App settings
$SYSCONFIG['FB'] = array(
	'appid'         		=> '',
	'secret'        		=> '',
	'page_url'      		=> ''
);

