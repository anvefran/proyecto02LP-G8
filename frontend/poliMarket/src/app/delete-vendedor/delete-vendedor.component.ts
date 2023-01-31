import { Component } from '@angular/core';
import {Router} from "@angular/router"
import { Vendedor } from '../interfaz/vendedor';
import { VendorsService } from '../servicios/vendors.service';
import { UsuariosService } from '../servicios/usuarios.service';
import { Usuario } from '../interfaz/usuario';
@Component({
  selector: 'app-delete-vendedor',
  templateUrl: './delete-vendedor.component.html',
  styleUrls: ['./delete-vendedor.component.css']
})
export class DeleteVendedorComponent {

  matricula: string = "";
  vendors: Vendedor[]=[];
  usuarioencontrado!: Vendedor;


  constructor(private usuarioService: UsuariosService,private vendorsService: VendorsService, private router: Router) {}

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
        this.usuarioService.deleteUser(this.usuarioencontrado.email).subscribe(respuesta =>{

          
        })

        this.vendorsService.deleteVendor(this.matricula).subscribe(respuesta => {

        })
        alert("El usuario ha sido eliminado.")
        this.router.navigate(['/login'])
      }
      
  
      
    
    }, (error) => {                   
      
      alert("Usuario no existe!")

    })

  }


}
