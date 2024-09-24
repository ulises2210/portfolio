import { Routes } from "@angular/router";
import { HomeComponent } from "./home";
import { AboutMeComponent } from "./about-me";


export const routes : Routes = [
  {path: '',    title: 'Inicio', component: HomeComponent},
  {path: 'home',title: 'Inicio', component: HomeComponent},
  {path: 'about-me',title: 'Sobre mi', component: AboutMeComponent},
  {path: '**', redirectTo: ''}
]
