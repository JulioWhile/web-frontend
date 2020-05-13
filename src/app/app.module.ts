import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { CrudTiendasComponent } from './components/crud/crud-tiendas/crud-tiendas.component';
import { CrudComputadorasComponent } from './components/crud/crud-computadoras/crud-computadoras.component';
import { CrudUsuariosComponent } from './components/crud/crud-usuarios/crud-usuarios.component';
import { ComputadoraItemComponent } from './components/crud/computadora-item/computadora-item.component';
import { TiendaItemComponent } from './components/crud/tienda-item/tienda-item.component';
import { TiendaAddComponent } from './components/crud/tienda-add/tienda-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TiendasComponent,
    CrudTiendasComponent,
    CrudComputadorasComponent,
    CrudUsuariosComponent,
    ComputadoraItemComponent,
    TiendaItemComponent,
    TiendaAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
