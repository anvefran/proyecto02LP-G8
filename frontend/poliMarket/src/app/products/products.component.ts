import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaz/producto';
import { ProductsService } from  'src/app/servicios/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Producto[]=[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(){
    this.productsService.getAllProducts().subscribe(respuesta => {
       this.products = respuesta as Array<Producto>;
       console.log(this.products)
     })
   }

   onClick(product: Producto){

      this.productsService.addProductoToCart(product).subscribe(respuesta => {
        console.log("finalización")
      })
   }
}
