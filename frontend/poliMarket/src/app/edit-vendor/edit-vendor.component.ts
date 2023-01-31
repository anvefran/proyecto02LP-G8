import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaz/usuario';
import {Router} from "@angular/router"
import { Vendedor } from '../interfaz/vendedor';
import { VendorsService } from '../servicios/vendors.service';
@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.component.html',
  styleUrls: ['./edit-vendor.component.css']
})
export class EditVendorComponent {

  matricula: string = "";
  vendors: Vendedor[]=[];
  usuarioencontrado!: Vendedor;

  constructor(private vendorsService: VendorsService, private router: Router) {}

  ngOnInit(){
    this.vendorsService.getAllVendors().subscribe(respuesta => {
       this.vendors = respuesta as Array<Vendedor>;
     })
  }

  onClickSubmit(data: any){
    this.matricula = data.matricula;
    this.checkIfExists(this.matricula);


  }


  checkIfExists(matricula: string){
    this.vendorsService.getVendor(matricula).subscribe((respuesta: any) =>{
      this.usuarioencontrado = respuesta as Vendedor;
      if(this.usuarioencontrado.id != ""){
        alert("Usuario encontrado!")
        this.router.navigate(['/editarVendedor/', this.usuarioencontrado.id])
      }
      
  
      
    
    }, (error) => {                   
      
      alert("Usuario no existe!")

    })

  }




}


