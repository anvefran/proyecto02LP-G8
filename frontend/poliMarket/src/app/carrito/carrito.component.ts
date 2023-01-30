import { Component } from '@angular/core';
import { Producto } from '../interfaz/producto';

//const ELEMENT_DATA: Producto[] = [
//  {id: "1",startUp: "Eduardo", nombre: 'Brownie de Chocolate', precio: 1.5 , stock: 2 ,imageURL: 'h/h/h', categoria: 'frutas', descripcion: "this"}
//];
const ELEMENT_DATA: Producto[]=[];
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  displayedColumns: string[] = ['id','Imagen', 'Producto','Categoria', 'Precio'];
  dataSource = ELEMENT_DATA;
}
