import { Component } from '@angular/core';
import { Vendedor } from '../interfaz/vendedor';
import { VendorsService } from '../servicios/vendors.service';
@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent {

  vendors: Vendedor[] = [];

  constructor(private vendorsService: VendorsService) {}

  ngOnInit(){
    this.vendorsService.getAllVendors().subscribe(respuesta => {
       this.vendors = respuesta as Array<Vendedor>;
     })
   }

}

