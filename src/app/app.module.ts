import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoDePreguntasComponent } from './juego-de-preguntas/juego-de-preguntas.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { MusicaComponent } from './components/musica/musica.component';
import { MonedaComponent } from './components/moneda/moneda.component';
import { PuntoDComponent } from './components/punto-d/punto-d.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';


@NgModule({
  declarations: [
    AppComponent,
    JuegoDePreguntasComponent,
    HoroscopoComponent,
    HeaderComponent,
    MusicaComponent,
    MonedaComponent,
    PuntoDComponent,
    BusquedaComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [ HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
