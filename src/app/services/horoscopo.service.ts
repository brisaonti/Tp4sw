import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http:HttpClient) {}
  getTextHoroscopo(sign:string, language:string):Observable<any>{
    //solo funciona con el idioma portuguez
    let httpOpion={
      headers:new HttpHeaders({
        'X-RapidAPI-Key': 'ffcae088damshdc08d3615f7ec9bp171fe0jsn1d80b0b39007',
	     	'X-RapidAPI-Host': 'horoscope-api.p.rapidapi.com'

      })
    }
    return this._http.get("https://horoscope-api.p.rapidapi.com/"+language+"/"+sign, httpOpion);
  }
 
}
