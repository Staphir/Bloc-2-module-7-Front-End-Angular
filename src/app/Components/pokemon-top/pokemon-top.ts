import { Component } from '@angular/core';
import {PokemonItem} from '../pokemon-item/pokemon-item';
import {Pokemon} from '../../interfaces/pokemon';
import {PokemonService} from '../../services/pokemon-service';
import {SlicePipe} from '@angular/common';

@Component({
  selector: 'app-pokemon-top',
  imports: [
    PokemonItem,
    SlicePipe
  ],
  templateUrl: './pokemon-top.html',
  styleUrl: './pokemon-top.scss',
})
export class PokemonTop {
  pokemonList?: Pokemon[];

  constructor(private pokemonService: PokemonService) {
  }

  ngAfterViewInit(): void {
    this.pokemonList = this.pokemonService.pokemonList;
  }
}
