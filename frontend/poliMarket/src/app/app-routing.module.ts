import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { VendorsComponent } from './vendors/vendors.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { CarritoComponent } from './carrito/carrito.component';
import { RegisterComponent } from './register/register.component';
import { RegisterVendorComponent } from './register-vendor/register-vendor.component';

const routes: Routes = [
  { path: "products", component: ProductsComponent },
  { path: "vendors", component: VendorsComponent},
  { path: "index", component: PrincipalComponent},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  {path:"regvendor", component:RegisterVendorComponent},
  { path: "product/update/:id", component: ProductUpdateComponent},
  { path: "myProducts", component: MyProductsComponent},
  { path: "**", redirectTo: "login"},
  { path: "carrito", component: CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
