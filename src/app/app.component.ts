// src/app/app.component.ts
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Cliente HTTP para llamadas API
import { CommonModule } from '@angular/common'; // Provee directivas como *ngFor y pipes como titlecase

@Component({
  selector: 'app-root',       // Selector para renderizar este componente en index.html
  standalone: true,           
  imports: [CommonModule, HttpClientModule], // Importa módulos necesarios para plantilla y HTTP
  templateUrl: './app.component.html'
})
export class AppComponent {
  // -- creamos un arreglo para almacenar los datos solicitados
  pokemons: any[] = [];

  // inyectamos HttpClient para realizar peticiones HTTP
  constructor(private http: HttpClient) {}

  // Hook de ciclo de vida que se ejecuta después de inicializar el componente
  ngOnInit() {
    // pedimos los primeros 24 Pokémon de la api publica de PokeAPI
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=24')
      .subscribe((res: any) => {
        // Mapeamos la respuesta de la API para incluir nombre y URL de la imagen de cada Pokémon
        this.pokemons = res.results.map((poke: any, index: number) => {
          const id = index + 1; // Calcula el ID del Pokémon para la URL del sprite
          return {
            name: poke.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          };
        });
      });
  }
}