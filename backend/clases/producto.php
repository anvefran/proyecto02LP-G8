<?php
class Producto {
    // Properties
  public $id;
    public $nombre;
    public $precio;
    public $descripcion;
    public $vendedor;
    public $categoria;
  
    public function __construct($id,$nombre,$precio,$descripcion,$vendedor, $categoria){
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->descripcion = $descripcion;
        $this->vendedor = $vendedor;
        $this->categoria = $categoria;
        $this->id = $id;
    }
    // Methods
    function set_name($nombre) {
      $this->nombre = $nombre;
    }
    function get_name() {
      return $this->nombre;
    }
    function set_cat($cat) {
      $this->categoria = $cat;
    }
    function get_cat() {
      return $this->categoria;
    }
    function set_precio($precio) {
      $this->precio = $precio;
    }
    function get_precio() {
        return $this->precio;
    }
    function set_descripcion($descripcion) {
        $this->descripcion =$descripcion;
    }
    function get_descripcion() {
      return $this->descripcion;
    }
    function set_vendedor($vendedor) {
        $this->vendedor =$vendedor;
    }
    function get_vendedor() {
        return $this->vendedor;
    }
    //CREATE
    public function postProduct(){ //crea un producto
    $jsonContent = file_get_contents('../data/productos.json');
    $productos = json_decode($jsonContent,true);
    $productos[] = array(
      "id"=> $this->id,
      "nombre"=> $this->nombre,
      "precio"=> $this->precio,
      "categoria" => $this->categoria,
      "descripcion"=>$this->descripcion,
      "vendedor"=> $this->vendedor
    );
    $archivo = fopen("../data/productos.json", "w");
    fwrite($archivo, json_encode($productos));
    fclose($archivo);
    $fileContent = file_get_contents("../data/productos.json");
    echo $fileContent;
    }

    //READ ALL PRODUCTS
    public static function getProductos(){
    $fileContent = file_get_contents("../data/productos.json");
    echo $fileContent;
    }

    //READ ONE PRODUCT
    public static function getProducto($id){
      $fileContent = file_get_contents("../data/productos.json");
      $productos = json_decode($fileContent,true);
      echo json_encode($productos[$id],true);
    }

    //UPDATE ONE PRODUCT
    public function updateProduct($id){
      $fileContent = file_get_contents("../data/productos.json");
      $productos = json_decode($fileContent,true);
      $product = array(
        "id"=> $this->id,
        "nombre"=> $this->nombre,
        "precio"=> $this->precio,
        "categoria" => $this->categoria,
        "descripcion"=>$this->descripcion,
        "vendedor"=> $this->vendedor
      );
      $productos[$id] = $product;
      $file = fopen("../data/productos.json", 'w');
      fwrite($file,json_encode($productos));
      fclose($file);
      $fileContent = file_get_contents("../data/productos.json");
      echo $fileContent;
    }

    //DELETE ONE PRODUCT
    public static function deleteProduct($id){
      $fileContent = file_get_contents("../data/productos.json");
      $productos = json_decode($fileContent,true);
      array_splice($productos,$id,1);
      $file = fopen("../data/productos.json", 'w');
      fwrite($file,json_encode($productos));
      fclose($file);
      $fileContent = file_get_contents("../data/productos.json");
      echo $fileContent;
    }
  }
?>