import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaz/producto';
import { ProductsService } from '../servicios/products.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogVentaComponent } from '../dialog-venta/dialog-venta.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{
  displayedColumns: string[] = ['id','Imagen', 'Producto','Categoria', 'Precio'];
  dataSource: Producto[] = [];

  constructor(private productService: ProductsService, public dialog : MatDialog){
  }

  ngOnInit(): void {
    this.productService.getAllItemsFromCart().subscribe( respuesta => {

      this.dataSource = respuesta as Array<Producto>;
      
    })
  }

  getTotalCost(){
    return this.dataSource.map(p => p.precio).reduce((acc, value) => acc + value, 0)
  }

  confirmarVenta(enterAnimationDuration: string, exitAnimationDuration: string){
    this.dataSource = [];
    this.dialog.open(DialogVentaComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }
  
}
