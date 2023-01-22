import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaz/producto';
import { ProductsService } from '../servicios/products.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent  implements OnInit{
  products: Producto[]=[];
  constructor(private productsService: ProductsService) {
  }

  ngOnInit(){
    this.productsService.getAllProducts().subscribe(respuesta => {
       //let response = respuesta as AllPokes;
       this.products = respuesta as Array<Producto>;
       console.log(this.products)
     })
   }
}
