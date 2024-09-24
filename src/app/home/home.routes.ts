import { Routes } from "@angular/router";
import { AboutMeComponent, HomeComponent } from "./pages";

export const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren : () => import ('./pages/pages.routes').then(m => m.routes)
  }
]


