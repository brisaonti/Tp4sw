import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MonedaService {

  constructor(private _http: HttpClient) { }
   public convertirMoney(cant:string, fromType:string, toType:string):Observable<any>{
     ///Pongo lo de siemple
     const httpOptions ={
       headers : new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'ffcae088damshdc08d3615f7ec9bp171fe0jsn1d80b0b39007',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com',
       }),
     }
     const body= new HttpParams ()
     .set('from-value',cant)
     .set('from-type',fromType)
     .set('to-type',toType)
     return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",body,httpOptions);
   }
}
