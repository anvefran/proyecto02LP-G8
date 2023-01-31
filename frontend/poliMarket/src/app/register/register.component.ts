import { Component } from '@angular/core';
import { UsuariosService } from  'src/app/servicios/usuarios.service';
import { Usuario } from 'src/app/interfaz/usuario';
import {Router} from "@angular/router"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = "";
  password: string = "";
  vendedor: boolean = false;

  yareg: string = "";
  users: Usuario[]=[];
  usuarioencontrado!: Usuario;

  constructor(private usuariosService: UsuariosService, private router: Router) {}

  ngOnInit(){
    this.usuariosService.getAllUsers().subscribe(respuesta => {
       this.users = respuesta as Array<Usuario>;
     })
  }

  onClickSubmit(data: any){
    this.email = data.email;
    this.password = data.password;
    this.checkIfExists(this.email);


  }

  checkCheckBoxvalue(event: any){
    this.vendedor = event.checked;

  }

  checkIfExists(mail: string){
    this.usuariosService.getUser(mail).subscribe((respuesta: any) =>{
      this.usuarioencontrado = respuesta as Usuario;
      if(this.usuarioencontrado.email != ""){
        alert("Usuario ya registrado!")
        this.router.navigate(['/login'])
      }
      
  
      
    
    }, (error) => {                   
      console.log("Registrando...")
      let json = {"email":this.email, "password":this.password}
      this.usuariosService.createUser(json).subscribe(respuesta => {

      })
      if(this.vendedor){
        this.router.navigate(['/regvendor'])
      }
      else{
        alert("Registrado!")
        this.router.navigate(['../login'])
      }
    })

  }


}
