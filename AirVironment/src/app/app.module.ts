import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherTableComponent } from './weather/weather-table/weather-table.component';
import { LoginComponent } from './login/login.component';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { fakeBackendProvider } from './_helpers/fake-backend';

import{ FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherTableComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: JwtInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS,useClass: ErrorInterceptor, multi:true},          
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
