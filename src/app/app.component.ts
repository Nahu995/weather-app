import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService){

  }
  ngOnInit(){
    this.weatherService.getWeather('ezeiza',"ar")
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
  submitLocation(cityName, countryCode){
    console.log(cityName.value,countryCode.value)
    return false;
  }
}
