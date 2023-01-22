<?php

//echo "metodo http: ".$_SERVER['REQUEST_METHOD'];
//echo 'Informacion:' . file_get_contents('php://input'); //lee lo que mando el cliente
//indicar que estamos mandando un json
header('Content-Type: application/json; charset=utf-8'); //indico que le estoy mandando un json
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Length: 0');
    header('Content-Type: text/plain');
    die();
}

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once("../clases/vendedor.php");

switch($_SERVER['REQUEST_METHOD']){

    //crear vendedor
    case 'POST':
        $_POST = json_decode(file_get_contents('php://input'),true); //obtiene en json format
        $vendedor = new Vendedor($_POST['id'],$_POST['nombre'],$_POST['email'],$_POST['facultad']);
        $vendedor->postVendedor();
        break;

    //obtener vendedores
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

    //actualizar vendedor
    case 'PUT':
        if (isset($_GET['id'])) {
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $vendedor = new Vendedor($_PUT['id'],$_PUT['nombre'],$_PUT['email'],$_PUT['facultad']);
            $vendedor->updateVendedor($_GET['id']);
        }
        break;

    //eliminar vendedor
    case 'DELETE':
        if(isset($_GET['id'])){
            Vendedor::deleteVendedor($_GET['id']);
        }
        break;
}
?>