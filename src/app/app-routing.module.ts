import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { CrudTiendasComponent } from './components/crud/crud-tiendas/crud-tiendas.component';
import { CrudUsuariosComponent } from './components/crud/crud-usuarios/crud-usuarios.component';
import { CrudComputadorasComponent } from './components/crud/crud-computadoras/crud-computadoras.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tiendas', component: TiendasComponent},
  { path: 'crud-tiendas', component: CrudTiendasComponent},
  { path: 'crud-usuarios', component: CrudUsuariosComponent},
  { path: 'crud-computadoras', component: CrudComputadorasComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
