<?php

/**
* Class for Error Log
* Last modified date: 2016-06-20
*/

class ErrorLogger
{

  const FORMAT = "%s - [%s]  %s - %s - - %s\r\n";

  private $schema;
  private $filename;
  private $target_path;
  private $uri;
  private $data;
  private $exception;
  private $IPAddr;
  private $useragent;
  private $create_date;

  # Constructor
  function __construct( $settings = array() )
  {
    extract( $settings );
    $this->schema           = ( isset( $schema ) ? $schema : null );
    $this->filename         = ( isset( $filename ) ? $filename : null );
    $this->target_path      = ( isset( $target_path ) ? $target_path : null );
    $this->uri              = ( isset( $uri ) ? $uri : '' );
    $this->data             = ( isset( $data ) ? $data : null );
    $this->exception        = ( isset( $exception ) ? $exception : null );
    $this->IPAddr           = ( isset( $ipaddress ) ? $ipaddress : $_SERVER['REMOTE_ADDR'] );
    $this->useragent        = ( isset( $useragent ) ? $useragent : ( isset( $_SERVER['HTTP_USER_AGENT'] ) ? $_SERVER['HTTP_USER_AGENT'] : null ) );
    $this->create_date      = date( 'Y-m-d H:i:s' );
  }

  /**
  * @param $path: the location log file ( real path )
  * @param $file: the output file name
  **/
  public function setPath( $path = '' )
  {
    $this->target_path = $path;
  }

  public function SetOutFile( $file = '' ){
    $this->filename = $file;
  }

  public function setURi( $uri = '' )
  {
    $this->uri = $uri;
  }

  public function setData( $data = '' )
  {
    $this->data = $data;
  }

  public function setException( $exception = '' )
  {
    $this->exception = $exception;
  }

  public function setSchema( $schema = '' ){
    $this->schema = $schema;
  }

  public function logFile()
  {

    try {

      $returnArr = array( 'hasError' => false );

      $path = $this->target_path.$this->filename;

      if( !is_writable( $this->target_path ) ){
        throw new Exception( $path . ' is not writable' );
      }

      $addr = is_null( $this->IPAddr ) ? $_SERVER['REMOTE_ADDR'] : $this->IPAddr;

      $log = sprintf( self::FORMAT, $this->IPAddr, $this->create_date, $this->uri, $this->exception, $this->data );

      if ( !$fp = fopen( $path, 'a+' ) ) {
        throw new Exception( 'Cannot open file ' . $path );
      }

      if( fwrite( $fp, $log ) === false ){
        throw new Exception( 'Cannot write to file ' . $path );
      }

      fclose( $fp );

    } catch ( Exception $ex ) {
      $returnArr['hasError'] = true;
      $returnArr['err'] = $ex->getMessage();
    }

    return $returnArr;
  }

  public function logDatabase()
  {

    try {

      $returnArr = array( 'hasError' => false );

      // check database connection
      if( !R::testConnection() ){
        $db = initDataBase();
        if( !$db['isConnected'] ){
          throw new Exception( 'Database connection failure: ' . $db['err'] );
        }
      }

      $log              = R::dispense( $this->schema );
      $log->source      = $this->uri;
      $log->data        = $this->data;
      $log->exception   = $this->exception;
      $log->ipaddress   = $this->IPAddr;
      $log->useragent   = $this->useragent ;
      $log->create_date = $this->create_date;
      R::store( $log );

    } catch ( Exception $ex ) {
      $returnArr['hasError'] = true;
      $returnArr['err'] = $ex->getMessage();
    }

    return $returnArr;
  }

}
