import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  URI: string = '';
  apiKey: string= 'd93b4bfa4122ba31272144bad4dab837';
  constructor(
    private httpClient: HttpClient
  ) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`;
   }

  getWeather(city:string, countryCode:string){
    return this.httpClient.get(`${this.URI} ${city},${countryCode}`)
  }
}
