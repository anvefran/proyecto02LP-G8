import { Component, Output, EventEmitter} from '@angular/core';
import { UsuariosService } from  'src/app/servicios/usuarios.service';
import { Usuario } from 'src/app/interfaz/usuario';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  valid: boolean = false;
  users: Usuario[]=[];

  constructor(private usuariosService: UsuariosService, private router: Router) {}

  ngOnInit(){
    this.usuariosService.getAllUsers().subscribe(respuesta => {
       this.users = respuesta as Array<Usuario>;
       console.log(this.users)
     })
  }
  checkLogin(email:string, password:string){
    this.usuariosService.getUser(this.email).subscribe((respuesta) => {
      let usuario = respuesta as Usuario;
      if (usuario.password != this.password){
        alert("Contrasena incorrecta")
      }else{
        this.valid = true;
        this.usuariosService.setCurrentEmail(this.email);
        localStorage.setItem('email', this.email);
        this.router.navigate(['/index'])
      }
    }, (error) => {                              //Error callback
      alert("Usuario no registrado")
    })
  }
  onClickSubmit(data: any) {
    this.email = data.email;
    this.password = data.password;
    this.checkLogin(this.email, this.password);
  }

}
