import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'PYSW-TP4-ONTIVEROS-BRISA/node_modules/rxjs/dist/types';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor( private _http: HttpClient) { }
  //CREO MI METODO
  public getLenguajes():Observable<any>{
    const httpOpions={
      headers :new HttpHeaders({
        'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': 'ffcae088damshdc08d3615f7ec9bp171fe0jsn1d80b0b39007',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      })
    }
    //LO USR que utlizo
    return this._http.get('https://google-translate1.p.rapidapi.com/language/translate/v2/languages',httpOpions);
  }
  public translateText(source:string, target:string, text:string):Observable<any>{
    const httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': 'ffcae088damshdc08d3615f7ec9bp171fe0jsn1d80b0b39007',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    }),
    }
    const body = new HttpParams()
    .set('q', text)
    .set('target', target)
    .set('source', source);
    return this._http.post('https://google-translate1.p.rapidapi.com/language/translate/v2',body, httpOptions);
    }
    }
