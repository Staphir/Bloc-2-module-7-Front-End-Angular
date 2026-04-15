import { Component } from '@angular/core';
import {PokemonItem} from '../pokemon-item/pokemon-item';
import {Pokemon} from '../../interfaces/pokemon';
import {PokemonService} from '../../services/pokemon-service';
import {SlicePipe} from '@angular/common';
import {PokemonUpdate} from '../pokemon-update/pokemon-update';

@Component({
  selector: 'app-pokemon-top',
  imports: [
    PokemonItem,
    SlicePipe,
    PokemonUpdate
  ],
  templateUrl: './pokemon-top.html',
  styleUrl: './pokemon-top.scss',
})
export class PokemonTop {
  setPokemon = false;
  selectedPokemon?: Pokemon;
  pokemonList?: Pokemon[];

  constructor(private pokemonService: PokemonService) {
  }

  ngAfterViewInit(): void {
    this.pokemonList = this.pokemonService.pokemonList;
  }

  onSelectPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
    this.setPokemon = true;
  }

  onUpdatePokemon(pokemon: Pokemon) {
    this.pokemonService.updatePokemon(pokemon);
    this.setPokemon = false;
  }
}
