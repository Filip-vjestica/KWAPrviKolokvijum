import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NamestajTabelaComponent} from './Components/namestaj-tabela/namestaj-tabela.component';
import {NamestajDetaljiComponent} from './Components/namestaj-detalji/namestaj-detalji.component';
import {NamestajIzmenaComponent} from './Components/namestaj-izmena/namestaj-izmena.component';
import {DeoTabelaComponent} from './Components/deo-tabela/deo-tabela.component';
import {DeoDetaljiComponent} from './Components/deo-detalji/deo-detalji.component';
import {DeoIzmenaComponent} from './Components/deo-izmena/deo-izmena.component';
import {DeoNamestajaTabelaComponent} from './Components/deo-namestaja-tabela/deo-namestaja-tabela.component';
import {DeoNamestajaDetaljiComponent} from './Components/deo-namestaja-detalji/deo-namestaja-detalji.component';
import {DeoNamestajaIzmenaComponent} from './Components/deo-namestaja-izmena/deo-namestaja-izmena.component';

const routes: Routes = [
    {path: 'namestaji', component: NamestajTabelaComponent},
    {path: 'namestajDetalji/:id', component: NamestajDetaljiComponent},
    {path: 'namestajIzmena/:id', component: NamestajIzmenaComponent},
    {path: 'delovi', component: DeoTabelaComponent},
    {path: 'deoDetalji/:id', component: DeoDetaljiComponent},
    {path: 'deoIzmena/:id', component: DeoIzmenaComponent},
    {path: 'deoNamestaja', component: DeoNamestajaTabelaComponent},
    {path: 'deoNamestajaDetalji/:id', component: DeoNamestajaDetaljiComponent},
    {path: 'deoNamestajaIzmena/:id', component: DeoNamestajaIzmenaComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }