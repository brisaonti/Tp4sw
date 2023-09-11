import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { MonedaComponent } from './components/moneda/moneda.component';
import { MusicaComponent } from './components/musica/musica.component';
import { PuntoDComponent } from './components/punto-d/punto-d.component';


const routes: Routes = [
  {path:"horoscopo",component:HoroscopoComponent},
 
  {path:"musica",component:MusicaComponent},
  {path:"moneda",component:MonedaComponent},
  {path: "punto-d",component:PuntoDComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
