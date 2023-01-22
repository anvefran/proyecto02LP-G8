<?php
class Producto {
    // Properties
    public $id;
    public $startUp;
    public $nombre;
    public $precio;
    public $stock;
    public $imageURL;
    public $descripcion;
    public $categoria;
    
  
    public function __construct($id,$startUp,$nombre, $precio,$stock,$imageURL,$descripcion, $categoria){
        $this->id = $id;
        $this->startUp = $startUp;
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->stock = $stock;
        $this->imageURL = $imageURL;
        $this->descripcion = $descripcion;
        $this->categoria = $categoria;
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
    function set_id_vendedor($id_vendedor) {
        $this->id_vendedor =$id_vendedor;
    }
    function get_id_vendedor() {
        return $this->id_vendedor;
    }

    //CREATE
    public function postProduct(){ //crea un producto
    $jsonContent = file_get_contents('../data/productos.json');
    $productos = json_decode($jsonContent,true);
    $productos[] = array(
      "id"=> $this->id,
      "startUp"=> $this->startUp,
      "nombre"=> $this->nombre,
      "precio"=> $this->precio,
      "stock"=> $this->stock,
      "imageURL"=> $this->imageURL,
      "categoria" => $this->categoria,
      "descripcion"=>$this->descripcion
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
      
      for ($idx = 0; $idx < count($productos); $idx++){
        $id_tmp_prod = $productos[$idx]["id"];
        if($id_tmp_prod == $id){
          echo json_encode($productos[$idx],true);
          return 0;
        }

      }
      echo "element not found";
      return -1;
      
    }

    //UPDATE ONE PRODUCT
    public function updateProduct($id){
      $fileContent = file_get_contents("../data/productos.json");
      $productos = json_decode($fileContent,true);

      for ($idx = 0; $idx < count($productos); $idx++){

        $id_producto_anterior = $productos[$idx]["id"];
        
        //en el caso de que se encuentre el producto a actualizar
        if($id_producto_anterior == $id){

          //producto que se va a actualizar
          $new_product = array(
            "id"=> $this->id,
            "startUp"=> $this->startUp,
            "nombre"=> $this->nombre,
            "precio"=> $this->precio,
            "stock"=> $this->stock,
            "imageURL"=> $this->imageURL,
            "categoria" => $this->categoria,
            "descripcion"=>$this->descripcion
          );

          $productos[$idx] = $new_product;
          
          $file = fopen("../data/productos.json", 'w');
          fwrite($file,json_encode($productos));
          fclose($file);
          $fileContent = file_get_contents("../data/productos.json");
          echo $fileContent;

          return 0; //success

        } 
      }

      echo "element not found";
      return -1; //error
      
      
    }

    //DELETE ONE PRODUCT
    public static function deleteProduct($id){
      $fileContent = file_get_contents("../data/productos.json");
      $productos = json_decode($fileContent,true);
      
      for( $idx = 0; $idx < count($productos) ; $idx++){
        $producto_id = $productos[$idx]["id"];
        if($producto_id == $id){ //coincidencia de id's
          array_splice($productos, $idx, 1); //se elimina en el índice encontrado dentro del arreglo

          //se actualiza el archivo
          $file = fopen("../data/productos.json", 'w');
          fwrite($file,json_encode($productos));
          fclose($file);
          $fileContent = file_get_contents("../data/productos.json");
          echo $fileContent;
          
          return 0 ; //success
        }

      }
      echo "element not found";
      return -1; //error
    }

    //mostrar productos según su categoría
    public static function showByCategories($category){
      $fileContent = file_get_contents("../data/productos.json");
      $productos = json_decode($fileContent,true);
      $arr_filtrado = array();

      foreach( $productos as $producto){
       if ($producto["categoria"] == $category){
         $arr_filtrado[] = $producto;
       }
      }
      
      echo json_encode($arr_filtrado);
    }

    public static function showProductsGreaterThan($price){
      $fileContent = file_get_contents("../data/productos.json");
      $productos = json_decode($fileContent,true);
      $arr_filtrado = array();

      foreach( $productos as $producto){
       if (floatval($producto["precio"]) > floatval($price)){
         $arr_filtrado[] = $producto;
       }
      }
      
      echo json_encode($arr_filtrado);
    }

    public static function showProductsLessThan($price){
      $fileContent = file_get_contents("../data/productos.json");
      $productos = json_decode($fileContent,true);
      $arr_filtrado = array();

      foreach( $productos as $producto){
       if (floatval($producto["precio"]) < floatval($price)){
         $arr_filtrado[] = $producto;
       }
      }
      
      echo json_encode($arr_filtrado);
    }

  }
?>