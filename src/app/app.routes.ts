import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArrayComponent} from './array/array.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'array', component: ArrayComponent }
];
