import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/services/busqueda.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  [x: string]: any;
  ///Miro las clases
  valorBusqueda:string = '';
  resultados:Array<any> = new Array<any>();
  videoSeleccionado!: any;
  constructor(private busquedaService:BusquedaService) { }

  ngOnInit(): void {
  }
  //MIS MI METODOS
  buscarVideos(busqueda:string){
    this.busquedaService.buscarVideo(busqueda).subscribe(
      result=>{
        this.resultados = result.results;
      },
      error=>{
        console.log(error)
      }
    )
  }

  seleccionarVideo(video:any){
    this.videoSeleccionado = video;
  }
}
