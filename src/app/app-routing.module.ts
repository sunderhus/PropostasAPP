import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemPropostasComponent } from './listagem-propostas/listagem-propostas.component';
import { ListagemContatosComponent } from './listagem-contatos/listagem-contatos.component';

const routes: Routes = [
  {path: '', component: ListagemContatosComponent},
  {path: 'clientes', component: ListagemContatosComponent},
  {path: 'propostas', component: ListagemPropostasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
