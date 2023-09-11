import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor( private _http:HttpClient) { }
  //Metodo para ver lo que mi api tiene
  public getMusic( text:string):Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'ffcae088damshdc08d3615f7ec9bp171fe0jsn1d80b0b39007',
		    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }),
    }
    return this._http.get("https://deezerdevs-deezer.p.rapidapi.com/search?q="+text,httpOptions);
  }
  ///Otro metodo que necesito para mostrar en un aray
  public gerTack (id:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'ffcae088damshdc08d3615f7ec9bp171fe0jsn1d80b0b39007',
    		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }),
    }
    return this._http.get("https://deezerdevs-deezer.p.rapidapi.com/track/"+id,httpOptions);
  }
  
}
