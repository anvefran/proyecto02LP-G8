<?php
class Item{
    public $id;
    public $producto;
    public $cantidad;

    public function __construct($id, $producto, $cantidad){
        $this->id = $id;
        $this->producto = $producto;
        $this->cantidad = $cantidad;
    }

    public function postProduct(){ //crea un producto
        $jsonContent = file_get_contents('../data/carrito.json');
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
    
}

?>