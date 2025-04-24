import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  template: `
    <h2>Detalles del Pokémon con ID: {{ id }}</h2>
  `
})
export class PokedexComponent {
  id = inject(ActivatedRoute).snapshot.paramMap.get('id');
}
