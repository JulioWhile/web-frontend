import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudTiendasComponent } from './components/crud/crud-tiendas/crud-tiendas.component';
import { CrudUsuariosComponent } from './components/crud/crud-usuarios/crud-usuarios.component';
import { CrudComputadorasComponent } from './components/crud/crud-computadoras/crud-computadoras.component';
import { TiendaAddComponent } from './components/crud/tienda-add/tienda-add.component';
import { ComputadoraItemComponent } from './components/crud/computadora-item/computadora-item.component';
import { UsuarioAddComponent } from './components/crud/usuario-add/usuario-add.component';

const routes: Routes = [
  { path: 'crud-tiendas', component: CrudTiendasComponent },
  { path: 'crud-tiendas/:id', component: TiendaAddComponent },
  { path: 'crud-usuarios', component: CrudUsuariosComponent },
  { path: 'crud-usuarios/:id', component: UsuarioAddComponent },
  { path: 'crud-computadoras', component: CrudComputadorasComponent },
  { path: 'crud-computadoras/:id', component: ComputadoraItemComponent },
  { path: '', pathMatch: 'full', redirectTo: 'crud-computadoras' },
  { path: '**', pathMatch: 'full', redirectTo: 'crud-computadoras' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
