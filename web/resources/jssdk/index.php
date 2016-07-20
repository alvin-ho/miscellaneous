<?php

header( "Content-type: text/javascript" );

include_once dirname( __DIR__ )."/global.inc.php";

$js = <<<JS
  var app_settings = {
    appid         : '{$SYSCONFIG['FB']['appid']}',
    ver           : '{$SYSCONFIG['FB']['ver']}',
    scope         : '{$SYSCONFIG['FB']['scope']}',
    domain        : '{$SYSCONFIG['SERVER']['baseUrl']}',
    path          : '{$SYSCONFIG['SERVER']['subfolder']}',
    invite_msg    : '{$FB_INVITE['msg']}',
    share_generic : {
      title           : '{$FB_SHARE['generic']['title']}',
      link            : '{$FB_SHARE['generic']['link']}',
      image           : '{$FB_SHARE['generic']['image']}',
      caption         : '{$FB_SHARE['generic']['caption']}',
      description     : '{$FB_SHARE['generic']['description']}'
    }
  };
  \n
JS;

echo $js;

include_once dirname( __FILE__ )."/jssdk.js";
?>
