import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrService {
  private apiKey='ecd99f0c';
  private url='http://omdbapi.com/';
  constructor(private _http:HttpClient) { }
  buscarPelicula(titulo:string){
    const url=`http://www.omdbapi.com/?t=${titulo}&apikey=${this.apiKey}`;
    return this._http.get(url);
  }
}
