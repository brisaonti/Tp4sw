import { Component, OnInit } from '@angular/core';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {

  constructor(private servicio:HoroscopoService) { }
  signoElegido!:string;
  textoDelSigno!:string;
  ngOnInit(): void {

  }
  obtenerTextoHoroscopo(signo:string){
    //para que pueda ver lo que la appi me ofrezca
    this.servicio.getTextHoroscopo(signo,"pt").subscribe(
      result=>{
        console.log(result.text);
        this.signoElegido=signo;
        this.textoDelSigno=result.text;
      },
      errror=>{

      }
    )
  }

}
