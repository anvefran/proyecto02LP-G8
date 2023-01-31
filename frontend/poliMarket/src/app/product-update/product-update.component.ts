import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaz/producto';
import { ProductsService } from  'src/app/servicios/products.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router"

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {
  precio: number = 0;
  stock: number = 0;
  nombre: string = "";
  imagenUrl: any = "";
  description: string = "";
  categoria: string = "";
  id: string = "";
  startUp:string="";
  previousImg:string="";

  constructor(private router: Router,private route: ActivatedRoute, private productsService: ProductsService){
    this.route.params.subscribe(params => {
      this.id = params['id']; 
    });
    this.productsService.getProduct(this.id).subscribe(respuesta => {
      let response = respuesta as Producto;
      this.startUp = response.startUp;
      this.previousImg = response.imageURL
    })
  };

  onClickSubmit(data: any) {
    console.log(data)
    this.precio = data.precio;
    this.stock = data.stock;
    this.nombre = data.nombre;
    this.description = data.descripcion;
    this.categoria = data.categoria;
    let json = {"id":this.id, "startUp": this.startUp,"categoria":this.categoria, "precio": this.precio, "nombre": this.nombre, "stock": this.stock,"descripcion": this.description, "imageURL": this.previousImg}
    console.log(json)
    this.productsService.updateProduct(this.id, json).subscribe(respuesta=>{
      console.log(respuesta);
    });
    alert("Su producto ha sido actualizado");
    this.router.navigate(['/myProducts']);
  }
  readUrl(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      // convert image file to base64 string
      this.imagenUrl = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
}
