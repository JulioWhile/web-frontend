import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CrudTiendasComponent } from './components/crud/crud-tiendas/crud-tiendas.component';
import { CrudComputadorasComponent } from './components/crud/crud-computadoras/crud-computadoras.component';
import { CrudUsuariosComponent } from './components/crud/crud-usuarios/crud-usuarios.component';
import { ComputadoraItemComponent } from './components/crud/computadora-item/computadora-item.component';
import { TiendaAddComponent } from './components/crud/tienda-add/tienda-add.component';
import { UsuarioAddComponent } from './components/crud/usuario-add/usuario-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrudTiendasComponent,
    CrudComputadorasComponent,
    CrudUsuariosComponent,
    ComputadoraItemComponent,
    TiendaAddComponent,
    UsuarioAddComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
