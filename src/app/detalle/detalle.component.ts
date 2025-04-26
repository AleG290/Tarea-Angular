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
  
  //constructor se crea el httpcliente 
  constructor(private http: HttpClient, private ruta: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.ruta.snapshot.paramMap.get('id');
    if (this.id) {
      this.obtenerDetallesPokemon(this.id);
      this.obtenerHabilidades(this.id);
      this.obtenerTipo(this.id);
      this.obtenerdescripcionPokemon(this.id);
    }
  }

    // Obtener detalles del Pokémon
    obtenerDetallesPokemon(id: string) {
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe((respuesta: any) => {
        this.detallesPokemon = {
          ...this.detallesPokemon,
          nombre: respuesta.name,
          imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${respuesta.id}.png`,
          
          estadisticas: respuesta.stats.map((stat: any) => ({
            nombreEstadistica: stat.stat.name,
            valorBase: stat.base_stat
          })),
          juegos: respuesta.game_indices.map((juego: any) => juego.version.name),
          urlEvolucion: respuesta.species.url
       
        };
        
      });
    }
    //obtenemos detalles de peso y altura de os pokemon
    obtenerdescripcionPokemon(id: string) {
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe((respuesta: any) => {
        this.detallesPokemon = {
          nombre: respuesta.name,
          ...this.detallesPokemon,
          imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${respuesta.id}.png`,
          peso: (respuesta.weight / 10).toFixed(1),  // Peso en kilogramos 
          altura: (respuesta.height / 10).toFixed(1), // Altura en metros 
        }
      });
      
    }
   
 //metodo para obtener las habilidades si hay mas de una se mostraran en la interfaz
    obtenerHabilidades(id: string) {
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe((respuesta: any) => {
        this.detallesPokemon = {
          ...this.detallesPokemon, // usamos perador de programador para no sobreescribir el metodo y que cada uno mantenta sus valores
          nombre: respuesta.name,
          imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${respuesta.id}.png`,
          habilidades: respuesta.abilities.map((habilidad: any) => habilidad.ability.name)
        };
        
      });
  
    }

      obtenerTipo(id: string) {
        this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).subscribe((respuesta: any) => {
          this.detallesPokemon = {
            ...this.detallesPokemon,
            nombre: respuesta.name,
            imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${respuesta.id}.png`,
            tipos: respuesta.types.map((tipo: any) => tipo.type.name)
          };
      
        });
      }

    

    }

