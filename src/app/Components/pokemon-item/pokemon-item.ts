import {Component, Input} from '@angular/core';
import {Pokemon} from '../../interfaces/pokemon';
import {PokemonService} from '../../services/pokemon-service';
import {HighlightBackgroundColor} from '../../directives/highlight-background-color';

@Component({
  selector: 'app-pokemon-item',
  imports: [
    HighlightBackgroundColor
  ],
  templateUrl: './pokemon-item.html',
  styleUrl: './pokemon-item.scss',
})
export class PokemonItem {
  @Input() pokemon?: Pokemon;
  @Input() removed?: boolean;

  constructor(private pokemonService: PokemonService) {
  }

  onRemovePokemon() {
    if (!this.pokemon) return;
    this.pokemonService.removePokemon(this.pokemon.id);
  }
}
