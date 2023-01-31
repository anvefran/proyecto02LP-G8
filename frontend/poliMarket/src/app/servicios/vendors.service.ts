import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorsService {

  constructor(private http: HttpClient) {
    
  }
  getAllVendors() {
    return this.http.get('http://localhost/vscodephp/LP/proyecto02LP-G8/backend/api/vendedoresApi.php');
  }

  getVendor(matricula: string){
    return this.http.get('http://localhost/vscodephp/LP/proyecto02LP-G8/backend/api/vendedoresApi.php?id='+matricula);
  }

  createVendor(json: any){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(json)
    console.log(body)
    return this.http.post('http://localhost/vscodephp/LP/proyecto02LP-G8/backend/api/vendedoresApi.php',body, {'headers': headers})
  }

  updateVendor(json:any, id:string){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(json)
    console.log(body)
    return this.http.put('http://localhost/vscodephp/LP/proyecto02LP-G8/backend/api/vendedoresApi.php?id='+id,body)
  }
  
  deleteVendor(id:string){

    return this.http.delete('http://localhost/vscodephp/LP/proyecto02LP-G8/backend/api/vendedoresApi.php?id='+id)

  }

  getVendorFacultad(facu:string){
    return this.http.get('http://localhost/vscodephp/LP/proyecto02LP-G8/backend/api/vendedoresApi.php?facultad='+facu)
  }

  
}
