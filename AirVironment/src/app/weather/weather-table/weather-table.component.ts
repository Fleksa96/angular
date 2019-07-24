import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Weather } from '../weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss']
})
export class WeatherTableComponent implements OnInit {
  @Input() temperature;
  @Input() humidity;
  @Input() pollution;
  @Input() timestamps;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private weatherService: WeatherService) { }

  ngOnInit() {
  }

}
