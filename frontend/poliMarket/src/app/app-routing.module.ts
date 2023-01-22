import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { VendorsComponent } from './vendors/vendors.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: "products", component: ProductsComponent },
  { path: "vendors", component: VendorsComponent},
  { path: "index", component: PrincipalComponent},
  { path: "**", redirectTo: "index"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
