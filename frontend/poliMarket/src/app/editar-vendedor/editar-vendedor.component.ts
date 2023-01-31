import { Component } from '@angular/core';
import { UsuariosService } from  'src/app/servicios/usuarios.service';
import { VendorsService } from '../servicios/vendors.service';
import { Usuario } from 'src/app/interfaz/usuario';
import {ActivatedRoute, Router} from "@angular/router"
import { Vendedor } from '../interfaz/vendedor';
@Component({
  selector: 'app-editar-vendedor',
  templateUrl: './editar-vendedor.component.html',
  styleUrls: ['./editar-vendedor.component.css']
})
export class EditarVendedorComponent {
  email: string = "";
  facultad: string = "";
  matricula: string = "";
  nombre: string = "";
  imagen: string = "public/default2.png";
  startup: string = "";
  vendedor: boolean = false;
  users: Usuario[]=[];
  usuarioencontrado!: Usuario;

  public selectedValue: any;

  constructor(private router: Router,private route: ActivatedRoute, private vendorsService: VendorsService){
    this.route.params.subscribe(params => {
      this.matricula = params['id']; 
    });
  };

  ngInit(){
    this.vendorsService.getVendor(this.matricula).subscribe(respuesta => {
      let response = respuesta as Vendedor;
      this.email = response.email;
      this.facultad = response.facultad;
      this.nombre = response.nombre;
      this.startup = response.startup;
    })
    console.log(this.matricula)

  }


  onClickSubmit(data: any){
    this.email = data.email;
    this.facultad = this.selectedValue;
    this.nombre = data.names;
    this.startup = data.startup;
    let json = {"id":this.matricula,"nombre":this.nombre, "email":this.email, "facultad":this.facultad, "image": this.imagen, "startup":this.startup}
    this.vendorsService.updateVendor(json,this.matricula).subscribe(respuesta => {

    })
    alert("Update completo!")
    this.router.navigate(['/index'])
  }




}
