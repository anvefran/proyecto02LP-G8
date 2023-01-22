<?php

//echo "metodo http: ".$_SERVER['REQUEST_METHOD'];
//echo 'Informacion:' . file_get_contents('php://input'); //lee lo que mando el cliente
//indicar que estamos mandando un json
header('Content-Type: application/json; charset=utf-8'); //indico que le estoy mandando un json
include_once("../clases/producto.php");

switch($_SERVER['REQUEST_METHOD']){
    //agregar productos
    case 'POST':
        $_POST = json_decode(file_get_contents('php://input'),true); //obtiene en json format

        $id_prod = $_POST['id'];
        $startUp = $_POST['startUp'];
        $nombre_prod = $_POST['nombre'];
        $precio_prod = $_POST['precio'];
        $stock = $_POST['stock'];
        $imageURL = $_POST['imageURL'];
        $descr_prod = $_POST['descripcion'];
        $categoria = $_POST['categoria'];

        $producto = new Producto($id_prod,   $startUp, $nombre_prod, $precio_prod, $stock, $imageURL,  $descr_prod,  $categoria);
        $producto->postProduct();

        break;

    //obtener productos
    case 'GET':
        if (isset($_GET['id'])){
            //mostrar productos por id
            Producto::getProducto($_GET['id']);

        }else if (isset($_GET['categoria'])){

            //mostrar productos por categoría
             Producto::showByCategories($_GET['categoria']);
        }else if (isset($_GET['greater'])){
            //muestra los productos que tengan un precio mayor a un precio
            Producto::showProductsGreaterThan($_GET['greater']);
        }else if  (isset($_GET['less'])){

            //muestra los productos que tengan un precio menor a un precio
            Producto::showProductsLessThan($_GET['less']);
        }else{
            //obtener todos los productos
            Producto::getProductos();
        }

        break;
    
    //actualizar productos
    case 'PUT':
        if (isset($_GET['id'])) {
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $producto = new Producto($_PUT['id'], $_PUT['startUp'],$_PUT['nombre'],$_PUT['precio'],$_PUT['stock'],$_PUT['imageURL'],$_PUT['descripcion'],$_PUT['categoria']);
            $producto->updateProduct($_GET['id']);
        }
        break;

    //eliminar productos
    case 'DELETE':
        if(isset($_GET['id'])){
            Producto::deleteProduct($_GET['id']);
        }
        break;
}
?>