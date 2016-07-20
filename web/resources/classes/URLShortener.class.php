<?php
/**
* Class for SMS
* Last modified date: 2016-06-20
*/

class URLShortener
{

  private $url = 'http://ppmsg.co/yourls-api.php?';

  private $username;
  private $password;
  private $action;
  private $format;
  private $title;
  private $keyword;

  private $targetURL;

  # Constructor
  function __construct( $settings = array() )
  {
    extract( $settings );
    $this->username       = ( isset( $username ) ? $username : null );
    $this->password       = ( isset( $password ) ? $password : null );
    $this->action         = ( isset( $action ) ? $action : '' );
    $this->format         = ( isset( $format ) ? $format : null );
    $this->title          = ( isset( $title ) ? $title : null );
    $this->keyword        = ( isset( $keyword ) ? $keyword : null );
  }

  public function setAuth( $auth = array() )
  {
    extract( $auth );
    $this->username = ( isset( $username ) ? $username : null );
    $this->password = ( isset( $password ) ? $password : null );
  }

  public function setAction( $opt = null )
  {
    $this->action = $opt;
  }

  public function setFormat( $format = null )
  {
    $this->format = $format;
  }

  public function setTitle( $title = null )
  {
    $this->title = $title;
  }

  public function setKeyword( $keyword = null )
  {
    $this->keyword = $keyword;
  }

  /*
   *  return array
   *  @param boolean hasError: true | false
   *  @param array data: with status, message count, [ResponseID]
   */
  public function process( $targetURL = '' )
  {

    try {

      $returnArr = array( 'hasError' => false, 'shorturl' => null );

      $paramArr = array(
        "username"        => $this->username,
        "password"        => $this->password,
        "action"          => $this->action,
        "format"          => $this->format,
        "title"           => $this->title,
        "keyword"         => $this->keyword,
        'url'             => $targetURL
      );

      $this->setQueryString( $paramArr );

      $return_json = file_get_contents( $this->url );
      $result = json_decode( $return_json, true );

      if ( $result['statusCode'] != 200 || !isset( $result['shorturl'] ) ) {
        if( empty( $result['message'] ) ){
          $err = error_get_last();
          $error = isset( $err['message'] ) ? $err['message'] : '';
        }else{
          $error = $result['message'];
        }
        throw new Exception( $error );
    	}else{
    		$returnArr['shorturl'] = $result['shorturl'];
    	}

    } catch ( Exception $ex ) {
      $returnArr['hasError'] = true;
      $returnArr['err'] = $ex->getMessage();
    }

    return $returnArr;
  }

  // helper functions
  private function setQueryString( $params = array() )
  {
    $queryStr = http_build_query( $params );
    $this->url .= $queryStr;
  }

  private function getError( $errCode = '' )
  {

  }

}
