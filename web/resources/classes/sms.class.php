<?php
/**
* Class for SMS
* Last modified date: 2016-06-20
*/

class SMS
{

  private $url = 'https://api2.ablemobile.com/service/smsapi2.asmx/SendMessage';

  private $enable;
  private $account;
  private $password;
  private $sender;
  private $country_code;
  private $message;
  private $remarks;
  private $UserDefineNo;

  private $receiver_phone;
  private $receiver_name;


  # Constructor
  function __construct( $settings = array() )
  {
    extract( $settings );
    $this->enable         = ( isset( $enable ) ? $enable : false );
    $this->account        = ( isset( $account ) ? $account : null );
    $this->password       = ( isset( $pwd ) ? $pwd : null );
    $this->sender         = ( isset( $sender ) ? $sender : '' );
    $this->country_code   = ( isset( $country_code ) ? $country_code : null );
    $this->message        = ( isset( $message ) ? $message : null );
    $this->remarks        = ( isset( $remarks ) ? $remarks : null );
    $this->UserDefineNo   = ( isset( $UserDefineNo ) ? $UserDefineNo : null );
  }

  public function isEnabled()
  {
    return $this->enable;
  }

  public function enable( $opt = true )
  {
    $this->enable = $opt;
  }

  public function setAuth( $auth = array() )
  {
    extract( $auth );
    $this->account = ( isset( $account ) ? $account : null );
    $this->password = ( isset( $pwd ) ? $pwd : null );
  }

  public function setSender( $sender = '' )
  {
    $this->sender = $sender;
  }

  public function setUserDefineNo( $UserDefineNo = null )
  {
    $this->UserDefineNo = $UserDefineNo;
  }

  public function setCountryCode( $country_code = null )
  {
    $this->country_code = $country_code;
  }

  public function setMessage( $msg = '' )
  {
    $this->message = $msg;
  }

  public function setRemarks( $remarks = '' )
  {
    $this->remarks = $remarks;
  }

  /*
  * Support multiple phone numbers, splite by ";", Max 500 numbers
  */
  public function setReceiver( $phone = array() )
  {
    $this->receiver_phone = implode( ';', $phone );
  }

  /*
   *  return array
   *  @param boolean hasError: true | false
   *  @param array data: with status, message count, [ResponseID]
   */
  public function send()
  {

    try {

      if( !$this->enable ){
        throw new Exception( "Service has been disabled" );
      }

      $returnArr = array( 'hasError' => false, 'data' => array() );

      $postArr = array(
        "Username"        => $this->account,
        "Password"        => $this->password,
        "Countrycode"     => $this->country_code,
        "Telephone"       => $this->receiver_phone,
        "UserDefineNo"    => $this->UserDefineNo,
        "Message"         => $this->message,
        "Sender"          => $this->sender
      );

      $result = $this->curlRequest( $postArr );

      if( !$result['hasError'] ){

        $rawXML = str_replace( 'xmlns=', 'type=', $result['data'] );
        $xml = simplexml_load_string( htmlspecialchars_decode( $rawXML ) );

        $returnArr['data'] = array(
          'state'       =>  isset( $xml->ReturnValue->State ) ? (string)$xml->ReturnValue->State : null,
          'count'       =>  isset( $xml->ReturnValue->Count ) ? (string)$xml->ReturnValue->Count : null,
          'responseID'  =>  isset( $xml->ReturnValue->ResponseID ) ? (string)$xml->ReturnValue->ResponseID : null,
          'xml'         =>  $result['data']
        );

        if( $xml->ReturnValue->State != 1 ){
          $returnArr['hasError'] = true;
          $returnArr['err'] = $this->getError( $xml->ReturnValue->State );
        }

      } else {
        throw new Exception( $result['err'] );
      }

    } catch ( Exception $ex ) {
      $returnArr['hasError'] = true;
      $returnArr['err'] = $ex->getMessage();
    }

    return $returnArr;
  }

  // helper functions
  private function curlRequest( $postArr = array() )
  {

    try {

      $returnArr = array( 'hasError' => false, 'data' => null );

      $query_string = http_build_query( $postArr );
      // die( $query_string );
      $ch = curl_init();
      $options = array(
        CURLOPT_URL => $this->url,
        CURLOPT_HEADER => 0,
        CURLOPT_VERBOSE => 0,
        CURLOPT_POST => true,
        CURLOPT_SSL_VERIFYHOST => 0,
        CURLOPT_SSL_VERIFYPEER => 0,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POSTFIELDS => $query_string
      );

      curl_setopt_array( $ch, $options );
      $returnArr['data'] = curl_exec( $ch );

      if( $returnArr['data'] === false ){
        throw new Exception( curl_error( $ch ) );
      }
      curl_close( $ch );

    } catch ( Exception $ex ) {
      $returnArr['hasError'] = true;
      $returnArr['err'] = $ex->getMessage();
    }

    return $returnArr;
  }

  private function getError( $errCode = '' )
  {

    switch ( $errCode ) {
      case 0:
        $returnCode = 'Missing Values';
      break;
      case 1:
        $returnCode = 'Message Sent';
      break;
      case 10:
        $returnCode = 'Incorrect Username or Password';
      break;
      case 20:
        $returnCode = 'Message content too long';
      break;
      case 30:
        $returnCode = 'Message content too long';
      break;
      case 40:
        $returnCode = 'Telephone number too long';
      break;
      case 60:
        $returnCode = 'Incorrect Country Code';
      break;
      case 70:
        $returnCode = 'Balance not enough';
      break;
      case 80:
        $returnCode = 'Incorrect date time';
      break;
      case 100:
        $returnCode = 'System error, please try again';
      break;
      default:
        $returnCode = $errCode;
      break;
    }

    return $returnCode;
  }

}
