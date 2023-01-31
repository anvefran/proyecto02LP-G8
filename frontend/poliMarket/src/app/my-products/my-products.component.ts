import { Component, Output, SimpleChanges } from '@angular/core';
import { Producto } from 'src/app/interfaz/producto';
import { Vendedor } from 'src/app/interfaz/vendedor';
import { ProductsService } from  'src/app/servicios/products.service';
import { UsuariosService } from  'src/app/servicios/usuarios.service';
import { Usuario } from 'src/app/interfaz/usuario';
import { VendorsService } from 'src/app/servicios/vendors.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent {
  email!:any;
  startUp!: string;
  products: Producto[]=[];
  //vendors: Vendedor[]=[];
  constructor(private router: Router,private productsService: ProductsService,private vendorsService: VendorsService) {}
  ngOnInit(){
    this.email = localStorage.getItem('email')
    console.log("email "+this.email);
    this.vendorsService.getAllVendors().subscribe(respuesta => {
      let vendors = respuesta as Array<Vendedor>;
      for (let vendor of vendors){
        if (vendor.email == this.email){
          this.startUp = vendor.startup;
        }
      }
      this.productsService.getAllProducts().subscribe(respuesta => {
        let productos = respuesta as Array<Producto>;
        for (let producto of productos){
         if (producto.startUp == this.startUp){
           this.products.push(producto);
         }
        }
        console.log(this.products)
      })
    })
    
   }
   handle(id:string){
    let text = "Esta seguro de eliminar producto con id: "+ id+"?";
    if (confirm(text) == true) {
      this.productsService.deleteProduct(id).subscribe(respuesta=>{
        console.log(respuesta);
        this.router.navigate(['/myProducts']);
      });
    } 

   }
   
   ngOnDestroy(){
    console.log("destroying component")
   }
}
