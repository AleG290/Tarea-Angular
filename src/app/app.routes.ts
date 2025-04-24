import { Routes } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'pokedex/:id',
    loadComponent: () => import('./pokedex/pokedex.component').then(m => m.PokedexComponent)
  }
];




/*import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetallePokemonComponent } from './detalle-pokemon.component'; //El de el tipo

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'detalle/:id', component: DetallePokemonComponent }
];
*/