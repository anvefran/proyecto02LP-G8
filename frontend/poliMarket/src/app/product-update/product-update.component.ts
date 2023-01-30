import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaz/producto';
import { ProductsService } from  'src/app/servicios/products.service';
import { ActivatedRoute } from '@angular/router';

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
  id: string = "";
  startUp:string="";
  previousImg:string="";

  constructor(private route: ActivatedRoute, private productsService: ProductsService){
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
    console.log(data.imagen)
    if (this.imagenUrl == ""){
      this.imagenUrl = this.previousImg;
    }
    let json = {"id":this.id, "startUp": this.startUp, "precio": this.precio, "nombre": this.nombre, "stock": this.stock,"descripcion": this.description, "imageUrl": this.imagenUrl}
    console.log(json)
    this.productsService.updateProduct(this.id, json);
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
