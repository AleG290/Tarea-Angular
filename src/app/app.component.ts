import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  pokemons: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .subscribe((res: any) => {
        this.pokemons = res.results.map((poke: any, index: number) => {
          const id = index + 1;
          return {
            id,
            name: poke.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          };
        });
      });
  }
}
