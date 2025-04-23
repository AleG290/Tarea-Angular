import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetallePokemonComponent } from './detalle-pokemon.component'; //El de el tipo

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'detalle/:id', component: DetallePokemonComponent }
];