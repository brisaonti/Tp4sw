import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

 
  constructor(private _http: HttpClient) { }

  public buscarVideo(busqueda:string): Observable<any> {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '9f7d59fb03msh4984020de7aede6p1dea42jsn69f797bee367',
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
      }),
      params: new HttpParams()
      .set('query', busqueda)
    };

    return this._http.get("https://simple-youtube-search.p.rapidapi.com/search", httpOptions);
  }
}
