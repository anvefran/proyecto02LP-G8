<?php

//echo "metodo http: ".$_SERVER['REQUEST_METHOD'];
//echo 'Informacion:' . file_get_contents('php://input'); //lee lo que mando el cliente
//indicar que estamos mandando un json
header('Content-Type: application/json; charset=utf-8'); //indico que le estoy mandando un json
include_once("../clases/producto.php");

switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
        $_POST = json_decode(file_get_contents('php://input'),true); //obtiene en json format
        $producto = new Producto($_POST['id'],$_POST['nombre'],$_POST['precio'],$_POST['descripcion'], $_POST['vendedor'],$_POST['categoria']);
        $producto->postProduct();
        //$result['mensaje'] = 'Producto a guardar: ' . json_encode($_POST); //nombre del producto
        //tambien se puede imprimir un solo dato con $_POST['id'] y le muestro como json
        //echo json_encode($result);
        break;
    case 'GET':
        if (isset($_GET['id'])){
            Producto::getProducto($_GET['id']);
        }else{
            Producto::getProductos();
        }
        break;
    case 'PUT':
        if (isset($_GET['id'])) {
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $producto = new Producto($_PUT['id'],$_PUT['nombre'],$_PUT['precio'],$_PUT['descripcion'], $_PUT['vendedor'],$_PUT['categoria']);
            $producto->updateProduct($_GET['id']);
        }
        break;
    case 'DELETE':
        if(isset($_GET['id'])){
            Producto::deleteProduct($_GET['id']);
        }
        break;
}
?>