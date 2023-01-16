<?php
class Vendedor {
    // Properties
    public $id;
    public $nombre;
    public $email;
    public $facultad;
    
  
    public function __construct($id,$nombre,$email,$facultad){
        $this->nombre = $nombre;
        $this->email = $email;
        $this->facultad = $facultad;
        $this->id = $id;
    }
    // Methods
    function set_name($nombre) {
      $this->nombre = $nombre;
    }
    function get_name() {
      return $this->nombre;
    }
    function set_email($mail) {
      $this->email = $mail;
    }
    function get_email() {
      return $this->email;
    }
    function set_facultad($facultad) {
      $this->facultad = $facultad;
    }
    function get_facultad(){
        return $this->facultad;
    }
    //CREATE
    public function postVendedor(){ //crea un producto
    $jsonContent = file_get_contents('../data/vendedores.json');
    $vendedores = json_decode($jsonContent,true);
    $vendedores[] = array(
      "id"=> $this->id,
      "nombre"=> $this->nombre,
      "email" => $this->email,
      "facultad"=>$this->facultad
    );
    $archivo = fopen("../data/vendedores.json", "w");
    fwrite($archivo, json_encode($vendedores));
    fclose($archivo);
    $fileContent = file_get_contents("../data/vendedores.json");
    echo $fileContent;
    }

    //READ ALL PRODUCTS
    public static function getVendedores(){
    $fileContent = file_get_contents("../data/vendedores.json");
    echo $fileContent;
    }

    //READ ONE PRODUCT
    public static function getVendedor($id){
      $fileContent = file_get_contents("../data/vendedores.json");
    $vendedores = json_decode($fileContent, true);
      $indice =  Vendedor::encontrarArrID($vendedores,$id);
      echo json_encode($vendedores[$indice],true);
    }

    public static function getVendedoresFacultad($facu){
      $fileContent = file_get_contents("../data/vendedores.json");
      $vendedores = json_decode($fileContent, true);
      $viables = array();
      for($indice = 0; $indice<count($vendedores);$indice++){
        $array = $vendedores[$indice];
        if($array["facultad"] == $facu){
          array_push($viables, $array);
        }

      }
      echo json_encode($viables, true);
    }

    //UPDATE ONE PRODUCT
    public function updateVendedor($id){
      $fileContent = file_get_contents("../data/vendedores.json");
      $vendedores = json_decode($fileContent,true);
      $vendedor = array(
        "id"=> $this->id,
        "nombre"=> $this->nombre,
        "email" => $this->email,
        "facultad"=>$this->facultad
      );
      $indice =  Vendedor::encontrarArrID($vendedores,$id);
      $vendedores[$indice] = $vendedor;
      $file = fopen("../data/vendedores.json", 'w');
      fwrite($file,json_encode($vendedores));
      fclose($file);
      $fileContent = file_get_contents("../data/vendedores.json");
      echo $fileContent;
    }

    public static function encontrarArrID($arreglo, $id){
      for($indice = 0; $indice<count($arreglo);$indice++){
        $array = $arreglo[$indice];
        if($array["id"] == $id){
          return $indice;
        }
      }

    }

    //DELETE ONE PRODUCT
    public static function deleteVendedor($id){
      $fileContent = file_get_contents("../data/vendedores.json");
      $vendedores = json_decode($fileContent,true);
      $indice =  Vendedor::encontrarArrID($vendedores,$id);
      array_splice($vendedores,$indice,1);
      $file = fopen("../data/vendedores.json", 'w');
      fwrite($file,json_encode($vendedores));
      fclose($file);
      $fileContent = file_get_contents("../data/vendedores.json");
      echo $fileContent;
    }

    
  }
?>