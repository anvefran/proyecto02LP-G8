import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaz/producto';
import { Vendedor } from 'src/app/interfaz/vendedor';
import { ProductsService } from  'src/app/servicios/products.service';
import { UsuariosService } from  'src/app/servicios/usuarios.service';
import { Usuario } from 'src/app/interfaz/usuario';
import { VendorsService } from 'src/app/servicios/vendors.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent {
  precio: number = 0;
  stock: number = 0;
  nombre: string = "";
  imagenUrl: any = "";
  description: string = "";
  categoria: string = "";
  id: string = "";
  startUp:string="";
  email!: any;
  valid: boolean = true;

  constructor(private router: Router,private productsService: ProductsService,private vendorsService: VendorsService) {}

  ngOnInit(){
    this.email = localStorage.getItem('email')
    this.vendorsService.getAllVendors().subscribe(respuesta => {
      let vendors = respuesta as Array<Vendedor>;
      for (let vendor of vendors){
        if (vendor.email == this.email){
          this.startUp = vendor.startup;
        }
      }
    })
   }

  onClickSubmit(data: any) {
    this.precio = data.precio;
    this.stock = data.stock;
    this.nombre = data.nombre;
    this.description = data.descripcion;
    this.categoria = data.categoria;
    this.id = data.id;
    console.log(this.id);
    this.productsService.getAllProducts().subscribe(respuesta => {
      let productos = respuesta as Array<Producto>;
      for (let producto of productos){
        console.log(producto.id)
        if (producto.id == this.id){
          this.valid = false;
        }
      }
      if (this.valid==false){
        alert("Id ya esta siendo utilizado, no puede crear este producto");
        this.router.navigate(['/index']);
      }else{
        let json = {"id":this.id, "startUp": this.startUp,"categoria":this.categoria, "precio": this.precio, "nombre": this.nombre, "stock": this.stock,"descripcion": this.description, "imageURL": this.imagenUrl}
        console.log(json)
        this.productsService.postProduct(json).subscribe(respuesta=>{
        console.log(respuesta);
        });
        alert("Su producto ha sido creado");
        this.router.navigate(['/myProducts']);
      }
    });
  
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
