<?php

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


switch($_SERVER['REQUEST_METHOD']){
    //se agrega un producto al carrito de compra
    case 'POST':
        $_POST = json_decode(file_get_contents('php://input'),true); //obtiene en json format
        $jsonContent = file_get_contents('../data/carrito.json');
        $productos = json_decode($jsonContent,true);
        $productos[] = array(
        "id"=> $_POST ["id"],
        "startUp"=> $_POST ["startUp"],
        "nombre"=> $_POST ["nombre"],
        "precio"=> $_POST ["precio"],
        "stock"=> $_POST ["stock"],
        "imageURL"=> $_POST ["imageURL"],
        "categoria" => $_POST ["categoria"],
        "descripcion"=>$_POST ["descripcion"]
        );
        $archivo = fopen("../data/carrito.json", "w");
        fwrite($archivo, json_encode($productos ));
        fclose($archivo);
        $fileContent = file_get_contents("../data/carrito.json");
        echo $fileContent;

    //se obtiene todos los productos en formato json
    case  'GET':
        $fileContent = file_get_contents("../data/carrito.json");
        echo $fileContent;
           
}
?>