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
}
