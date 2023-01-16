<?php

//echo "metodo http: ".$_SERVER['REQUEST_METHOD'];
//echo 'Informacion:' . file_get_contents('php://input'); //lee lo que mando el cliente
//indicar que estamos mandando un json
header('Content-Type: application/json; charset=utf-8'); //indico que le estoy mandando un json
include_once("../clases/vendedor.php");

switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
        $_POST = json_decode(file_get_contents('php://input'),true); //obtiene en json format
        $vendedor = new Vendedor($_POST['id'],$_POST['nombre'],$_POST['email'],$_POST['facultad']);
        $vendedor->postVendedor();
        break;
    case 'GET':
        if (isset($_GET['id'])){
            Vendedor::getVendedor($_GET['id']);
        }
        elseif(isset($_GET['facultad'])){
            Vendedor::getVendedoresFacultad($_GET['facultad']);
        }
        else{
            Vendedor::getVendedores();
        }
        break;
    case 'PUT':
        if (isset($_GET['id'])) {
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $vendedor = new Vendedor($_PUT['id'],$_PUT['nombre'],$_PUT['email'],$_PUT['facultad']);
            $vendedor->updateVendedor($_GET['id']);
        }
        break;
    case 'DELETE':
        if(isset($_GET['id'])){
            Vendedor::deleteVendedor($_GET['id']);
        }
        break;
}
?>