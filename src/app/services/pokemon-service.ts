import { Injectable } from '@angular/core';
import {Pokemon} from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemonList: Pokemon[] = [];

  addPokemon(pokemonName: string) {
    this.pokemonList.push({
      id: this.pokemonList.length + 1,
      name: pokemonName,
      sexe: Math.random() < 0.5 ? 'male' : 'female',
    });
  }

  removePokemon(id: number) {
      this.pokemonList.splice(id - 1, 1);
      this.pokemonList.forEach((pokemon, id) => {
        pokemon.id = id + 1;
      });
  }

  updatePokemon(pokemon: Pokemon) {
    this.pokemonList[pokemon.id - 1] = pokemon;
  }
}
