import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-pokemon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Detalle del Pokémon</h2>
    <p>ID: {{ id }}</p>
    <img [src]="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png'" />
  `
})
export class DetallePokemonComponent {
  id: number;

  constructor(private route: ActivatedRoute) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
  }
}
