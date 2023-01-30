import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
    
  }
  getAllProducts() {
    return this.http.get('http://localhost/vscodephp/LP/proyecto02LP-G8/backend/api/productosApi.php');
  }
  deleteProduct(id:string) {
    return this.http.delete('http://localhost/vscodephp/LP/proyecto02LP-G8/backend/api/productosApi.php?id='+id);
  }
  getProduct(id:string) {
    return this.http.get('http://localhost/vscodephp/LP/proyecto02LP-G8/backend/api/productosApi.php?id='+id);
  }
  updateProduct(id:string,body:any) {
    return this.http.put('http://localhost/vscodephp/LP/proyecto02LP-G8/backend/api/productosApi.php?id='+id,body);
  }
}
