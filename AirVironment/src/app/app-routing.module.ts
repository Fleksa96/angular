import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { WeatherTableComponent } from './weather/weather-table/weather-table.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {
  path:'home', component: WeatherComponent, canActivate:[AuthGuard],
  children: [{path: "weather-table", component: WeatherTableComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
