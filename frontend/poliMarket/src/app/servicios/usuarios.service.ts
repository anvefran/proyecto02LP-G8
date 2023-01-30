import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private email: string = "";
  constructor(private http: HttpClient) {
    
  }
  getAllUsers() {
    return this.http.get('http://localhost/vscodephp/LP/proyecto02LP-G8/backend/api/usuariosApi.php');
  }
  getUser(email: string) {
    return this.http.get(`http://localhost/vscodephp/LP/proyecto02LP-G8/backend/api/usuariosApi.php?email=${email}`);
  }
  setCurrentEmail(email:string){
    this.email = email;
  }
  getCurrentEmail(){
    return this.email;
  }
}
