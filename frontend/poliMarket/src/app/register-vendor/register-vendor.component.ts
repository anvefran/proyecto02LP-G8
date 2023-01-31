import { Component } from '@angular/core';
import { UsuariosService } from  'src/app/servicios/usuarios.service';
import { VendorsService } from '../servicios/vendors.service';
import { Usuario } from 'src/app/interfaz/usuario';
import {Router} from "@angular/router"
@Component({
  selector: 'app-register-vendor',
  templateUrl: './register-vendor.component.html',
  styleUrls: ['./register-vendor.component.css']
})
export class RegisterVendorComponent{
  email: string = "";
  facultad: string = "";
  matricula: string = "";
  nombre: string = "";
  imagen: string = "public/default2.png";
  startup: string = "";
  vendedor: boolean = false;
  yareg: string = "";
  users: Usuario[]=[];
  usuarioencontrado!: Usuario;

  public selectedValue: any;

  constructor(private usuariosService: UsuariosService, private vendorsService: VendorsService, private router: Router) {}

  ngOnInit(){
    this.usuariosService.getAllUsers().subscribe(respuesta => {
       this.users = respuesta as Array<Usuario>;
     })
  }

  onClickSubmit(data: any){
    this.email = data.email;
    this.matricula = data.matricula;
    this.facultad = this.selectedValue;
    this.nombre = data.names;
    this.startup = data.startup;
    console.log(this.facultad)
    this.checkIfExists(this.email);


  }


  checkIfExists(mail: string){
    this.usuariosService.getUser(mail).subscribe((respuesta: any) =>{
      this.usuarioencontrado = respuesta as Usuario;
      if(this.usuarioencontrado.email != ""){
        console.log("Registrando...")
        let json = {"id":this.matricula,"nombre":this.nombre, "email":this.email, "facultad":this.facultad, "image": this.imagen, "startup":this.startup}
        this.vendorsService.createVendor(json).subscribe(respuesta => {

        })
        alert("Registro completado!")
        this.router.navigate(['/login'])
      }
      
  
      
    
    }, (error) => {                   
      alert("Este email que se registra no existe")
      this.router.navigate(['/register'])
    })

  }


}
