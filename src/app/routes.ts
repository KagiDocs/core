import { Routes } from '@angular/router';
import {Homepage} from './pages/homepage';

export const KAGIDOCS_ROUTES: Routes = [
  {path: '', component: Homepage, pathMatch: 'full', data: {}},
  {path: '**', redirectTo: ''},
];