import { Component, OnInit } from '@angular/core';
import { MonedaService } from 'src/app/services/moneda.service';

@Component({
  selector: 'app-moneda',
  templateUrl: './moneda.component.html',
  styleUrls: ['./moneda.component.css']
})
export class MonedaComponent implements OnInit {
  //HUSO las variables de la clase moneda
  moneda!:any;// es poner MODENA
  cant!:string;
  fromType!:string;
  toType!:string;
  //AGREGO ESTO
  finalResult!:string;
  //AGREMOS al cosntructor con el services/moneda
  constructor( private modenaService: MonedaService) {
    console.log(this.cant);
    console.log(this.fromType);
    console.log(this.toType);
   }
  ngOnInit(): void {
  }
  convertirMoneda(){
    this.modenaService.convertirMoney(this.cant,this.fromType,this.toType).subscribe((resultado:any)=>{
      this.moneda = resultado;
      this.finalResult =resultado.result;
      console.log(resultado);

    })
  }

}
