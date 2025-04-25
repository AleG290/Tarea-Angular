import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
  id: string | null = null;
  detallesPokemon: any = {};

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
          
          /*estadisticas: respuesta.stats.map((stat: any) => ({
            nombreEstadistica: stat.stat.name,
            valorBase: stat.base_stat
          })),
          juegos: respuesta.game_indices.map((juego: any) => juego.version.name),
          urlEvolucion: respuesta.species.url
          */
        };
      });
    }
}
