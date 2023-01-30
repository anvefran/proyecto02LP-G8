<?php
class Usuarios {
    // Properties
    public $email;
    public $password;
  
    public function __construct($email, $password){
        $this->email = $email;
        $this->password = $password;
    }
    // Methods
    function set_email($email) {
      $this->email = $email;
    }
    function get_email() {
      return $this->email;
    }
    function set_password($password) {
      $this->password = $password;
    }
    //CREATE
    public function postUser(){ //crea un producto
    $jsonContent = file_get_contents('../data/usuarios.json');
    $usuarios = json_decode($jsonContent,true);
    $usuarios[] = array(
      "email"=> $this->email,
      "password"=> $this->password
    );
    $archivo = fopen("../data/usuarios.json", "w");
    fwrite($archivo, json_encode($usuarios));
    fclose($archivo);
    $fileContent = file_get_contents("../data/usuarios.json");
    echo $fileContent;
    }

    //READ ALL PRODUCTS
    public static function getUsers(){
    $fileContent = file_get_contents("../data/usuarios.json");
    echo $fileContent;
    }

    //READ ONE PRODUCT
    public static function getUser($email){
      $fileContent = file_get_contents("../data/usuarios.json");
      $usuarios = json_decode($fileContent,true);
      
      for ($idx = 0; $idx < count($usuarios); $idx++){
        $id_tmp_prod = $usuarios[$idx]["email"];
        if($id_tmp_prod == $email){
          echo json_encode($usuarios[$idx],true);
          return 0;
        }

      }
      echo "element not found";
      return -1;
      
    }

  }
?>