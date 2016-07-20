<?php
/**
* PDO Class for MySQL
* Last modified date: 2015-07-30
*/

class database
{

    public $sql = null;
    public $error = null;
    public $errorCode = null;
    public $lastInsertId = null;
    public $data = null;
    public $num_row = 0;
    public $bindArr = array();

    private $dbh;
    private $host;
    private $dbname;
    private $username;
    private $password;

    # Constructor
    function __construct( $host = null, $name = null, $user = null, $pwd = null )
    {

        $this->host = $host;
        $this->dbname = $name;
        $this->username = $user;
        $this->password = $pwd;
        $this->dbh = $this->connect_db();
    }

    # Initialize database connection
    private function connect_db()
    {

        try{
            $conn = "mysql:host=$this->host;dbname=$this->dbname";
            $this->dbh = new PDO( $conn, $this->username, $this->password);
            $this->dbh->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
            $this->disable_emulate_prepare();
            $this->dbh->exec("SET NAMES utf8");
        } catch( PDOException $ex ){
            $this->error = $ex->getMessage();
            return false;
        }
        return $this->dbh;
    }

    # For MySQL's SELECT
    public function query( $sql, $bindParams = array(), $dataType="array" )
    {

        try{

            $this->sql = $sql;
            $this->bindArr = $bindParams;

            $stmt = $this->dbh->prepare( $this->sql );
            $stmt->execute( $this->bindArr );
            $this->num_row = $stmt->rowCount();
            if( $this->num_row > 0 ){
                $this->data = $stmt->fetchAll( PDO::FETCH_ASSOC );
                if( strtolower($dataType) == "json" ){
                    $this->data = json_encode( $this->data );
                }
            }else{
                $this->data = null;
            }

        }catch( PDOException $e ){
            $this->error = $e->getMessage();
            $this->errorCode = $e->getCode();
            return false;
        }
        return true;
    }

    public function returnCol( $sql, $bindParams = array(), $dataType="array" )
    {

        try{

            $this->sql = $sql;
            $this->bindArr = $bindParams;

            $stmt = $this->dbh->prepare( $this->sql );
            $stmt->execute( $this->bindArr );
            $this->num_row = $stmt->rowCount();
            if( $this->num_row > 0 ){
                $this->data = $stmt->fetchAll( PDO::FETCH_COLUMN );
                if( strtolower($dataType) == "json" ){
                    $this->data = json_encode( $this->data );
                }
            }else{
                $this->data = null;
            }

        }catch( PDOException $e ){
            $this->error = $e->getMessage();
            $this->errorCode = $e->getCode();
            return false;
        }
        return true;
    }

    # For MySQL's INSERT, UPDATE and DELETE
    public function execute( $sql, $bindParams = array() )
    {

      try{

        $this->sql = $sql;
        $this->bindArr = $bindParams;

        $stmt = $this->dbh->prepare( $this->sql );
        $stmt->execute( $this->bindArr );
        $this->lastInsertId = $this->dbh->lastInsertId();
        $this->num_row = $stmt->rowCount();
      } catch( PDOException $e ){
        $this->error = $e->getMessage();
        $this->errorCode = $e->getCode();
        return false;
      }
      return true;
    }

    # Turns off autocommit mode - PDO::beginTransaction
    public function beginTransaction()
    {
      $this->dbh->beginTransaction();
    }

    # Commits a transaction - PDO::beginTransaction
    public function commit()
    {
      // return true / false
      return $this->dbh->commit();
    }

    # rollback transactions - PDO::rollBack
    public function rollBack()
    {
      // return true / false
      return $this->dbh->rollBack();
    }

    # Disconnect database
    public function close()
    {
        $this->dbh = null;
    }

    # Enable executing multiple query in single call
    public function enable_emulate_prepare()
    {
      $this->dbh->setAttribute( PDO::ATTR_EMULATE_PREPARES, TRUE );
    }

    # Enable executing multiple query in single call
    public function disable_emulate_prepare()
    {
      $this->dbh->setAttribute( PDO::ATTR_EMULATE_PREPARES, FALSE );
    }

}
