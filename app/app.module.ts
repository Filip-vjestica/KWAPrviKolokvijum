import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NamestajTabelaComponent } from './components/namestaj-tabela/namestaj-tabela.component';
import { NamestajDetaljiComponent } from './components/namestaj-detalji/namestaj-detalji.component';
import { NamestajIzmenaComponent } from './components/namestaj-izmena/namestaj-izmena.component';
import { DeoNamestajaIzmenaComponent } from './components/deo-namestaja-izmena/deo-namestaja-izmena.component';
import { DeoNamestajaTabelaComponent } from './components/deo-namestaja-tabela/deo-namestaja-tabela.component';
import { DeoNamestajaDetaljiComponent } from './components/deo-namestaja-detalji/deo-namestaja-detalji.component';
import { DeoDetaljiComponent } from './components/deo-detalji/deo-detalji.component';
import { DeoTabelaComponent } from './components/deo-tabela/deo-tabela.component';
import { DeoIzmenaComponent } from './components/deo-izmena/deo-izmena.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { NamestajService } from './Service/namestaj.service';
import { DeoService } from './Service/deo.service';


@NgModule({
  declarations: [
    AppComponent,
    NamestajTabelaComponent,
    NamestajDetaljiComponent,
    NamestajIzmenaComponent,
    DeoNamestajaIzmenaComponent,
    DeoNamestajaTabelaComponent,
    DeoNamestajaDetaljiComponent,
    DeoDetaljiComponent,
    DeoTabelaComponent,
    DeoIzmenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [NamestajService,DeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
