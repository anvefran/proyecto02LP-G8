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

//echo "metodo http: ".$_SERVER['REQUEST_METHOD'];
//echo 'Informacion:' . file_get_contents('php://input'); //lee lo que mando el cliente
//indicar que estamos mandando un json
header('Content-Type: application/json; charset=utf-8'); //indico que le estoy mandando un json
include_once("../clases/usuarios.php");

switch($_SERVER['REQUEST_METHOD']){
    //agregar productos
    case 'POST':
        $_POST = json_decode(file_get_contents('php://input'),true); //obtiene en json format

        $email = $_POST['email'];
        $password = $_POST['password'];

        $usuario = new Usuarios($email, $password);
        $usuario->postUser();

        break;

    //obtener productos
    case 'GET':
        if (isset($_GET['email'])){
            //mostrar usuario por email
            Usuarios::getUser($_GET['email']);
        }else{
            //obtener todos los productos
            Usuarios::getUsers();
        }

        break;
    
    case 'DELETE':
        if(isset($_GET['email'])){
            Usuarios::deleteUsuario($_GET['email']);
        }
        break;
    

}
?>