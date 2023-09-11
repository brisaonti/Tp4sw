import { Component, OnInit } from '@angular/core';
import { QrService } from 'src/app/services/qr.service';

@Component({
  selector: 'app-punto-d',
  templateUrl: './punto-d.component.html',
  styleUrls: ['./punto-d.component.css']
})
export class PuntoDComponent implements OnInit {

  constructor(private servicio:QrService) { }
titulo!:string;
movie!:any;
buscarMovie(){
  this.servicio.buscarPelicula(this.titulo).subscribe(
    (response)=>{
      this.movie=response;
      console.log(response);
    },
    (error) => {
      console.error(error);
    }
  );
}
  ngOnInit(): void {
  }

}
