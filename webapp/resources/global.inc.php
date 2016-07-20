<?php

error_reporting( E_ALL );
mysqli_report( MYSQLI_REPORT_STRICT );
date_default_timezone_set( 'Asia/Hong_Kong' );

if ( preg_match( "/(digitalcampaignasia.com)/i", $_SERVER['SERVER_NAME'] ) ) {
	require_once dirname( __FILE__ ) . '/config/env.prod.php';
} else if ( preg_match( "/(wdemo.pixopunch.com)/i", $_SERVER['SERVER_NAME'] ) ) {
	require_once dirname( __FILE__ ) . '/config/env.wdemo.php';
} else if ( preg_match( "/(dev.pixopunch.com)/i", $_SERVER['SERVER_NAME'] ) ) {
	require_once dirname( __FILE__ ) . '/config/env.dev.php';
} else if ( preg_match( "/(pacim.local)/i", $_SERVER['SERVER_NAME'] ) ) {
	require_once dirname( __FILE__ ) . '/config/env.local.php';
} else {
	/*die('domain setting error');*/
	require_once dirname( __FILE__ ) . '/config/env.local.php';
}

require_once( dirname( __FILE__ ) . '/config/apps.config.php' );
// require_once( dirname( __FILE__ ) . '/database.class.php' );
require_once( dirname( __FILE__ ) . '/lib/RedBeanPHP/rb.php' );
require_once( dirname( __FILE__ ) . '/global.func.php' );
// require_once( dirname( __FILE__ ) . '/shopList.php' );

if (!session_id()) { session_start(); }
