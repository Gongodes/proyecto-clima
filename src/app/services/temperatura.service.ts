import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const urlBase = 'https://api.openweathermap.org/data/2.5/weather'

const appId = 'e266a4561f0092e6f25657545bb30313'

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(private http: HttpClient) { }


  getEstadoTiempo(ciudad: string, codigo :string){
    const url= `${urlBase}?q=${ciudad},${codigo}&lang=es&appid=${appId}`;

    return this.http.get(url);
  }

}
