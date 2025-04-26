import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  id: string | null = null;
  detallesPokemon: any = {};
  pokemonesRelacionados: any[] = [];

  constructor(private http: HttpClient, private ruta: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.ruta.snapshot.paramMap.get('id');
    if (this.id) {
      this.obtenerDetallesPokemon(this.id);
    }
  }

  // Obtener detalles del Pokémon
  obtenerDetallesPokemon(id: string) {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe((respuesta: any) => {
      this.detallesPokemon = {
        nombre: respuesta.name,
        imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${respuesta.id}.png`,
        estadisticas: respuesta.stats.map((stat: any) => ({
          nombreEstadistica: stat.stat.name,
          valorBase: stat.base_stat
        })),
        juegos: respuesta.game_indices.map((juego: any) => juego.version.name),
        urlEvolucion: respuesta.species.url
      };
      this.obtenerCadenaEvolucion(respuesta.species.url);
    });
  }

  // Obtener la cadena de evolución del Pokémon
  obtenerCadenaEvolucion(url: string) {
    this.http.get(url).subscribe((respuesta: any) => {
      const urlCadena = respuesta.evolution_chain.url;
      this.http.get(urlCadena).subscribe((cadena: any) => {
        let evolucion = cadena.chain;
        this.pokemonesRelacionados = [];

        // Pokémon base
        this.pokemonesRelacionados.push({
          nombre: evolucion.species.name,
          imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolucion.species.url.split('/')[6]}.png`
        });

        // Evoluciones
        while (evolucion.evolves_to.length > 0) {
          evolucion = evolucion.evolves_to[0];
          this.pokemonesRelacionados.push({
            nombre: evolucion.species.name,
            imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolucion.species.url.split('/')[6]}.png`
          });
        }
      });
    });
  }
}
