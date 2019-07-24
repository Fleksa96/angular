import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiUrl = 'https://boiling-scrubland-99747.herokuapp.com/measurement/latest';

  constructor(private http: HttpClient) { }

  getWeatherData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
