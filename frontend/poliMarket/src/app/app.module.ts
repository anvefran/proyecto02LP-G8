import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';  
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { VendorsComponent } from './vendors/vendors.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { CarritoComponent } from './carrito/carrito.component';
import {MatTableModule} from '@angular/material/table';

import {MatDialogModule} from '@angular/material/dialog';
import { DialogVentaComponent } from './dialog-venta/dialog-venta.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './register/register.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RegisterVendorComponent } from './register-vendor/register-vendor.component';
import { VenderComponent } from './vender/vender.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';
import { EditarVendedorComponent } from './editar-vendedor/editar-vendedor.component';
import { DeleteVendedorComponent } from './delete-vendedor/delete-vendedor.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    VendorsComponent,
    PrincipalComponent,
    CarritoComponent,
    DialogVentaComponent,
    LoginComponent,
    ProductUpdateComponent,
    MyProductsComponent,
    CarritoComponent,
    RegisterComponent,
    RegisterVendorComponent,
    VenderComponent,
    EditarVendedorComponent,
    EditVendorComponent,
    DeleteVendedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,  
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatBadgeModule,
    MatTableModule,
    MatDialogModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
