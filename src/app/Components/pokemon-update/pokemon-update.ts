import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {Pokemon} from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-update',
  imports: [],
  templateUrl: './pokemon-update.html',
  styleUrl: './pokemon-update.scss',
})
export class PokemonUpdate {
  @Input() selectedPokemon?: Pokemon;
  @Output() updatePokemon = new EventEmitter<Pokemon>();
  @ViewChild('pokemonNameInput') pokemonNameInput?: ElementRef;
  @ViewChild('pokemonSexeSelect') pokemonSexeSelect?: ElementRef;

  constructor() {}

  onUpdatePokemon() {
    if(!this.pokemonNameInput || !this.selectedPokemon) return;
    this.updatePokemon.emit({
      id: this.selectedPokemon.id,
      name: this.pokemonNameInput.nativeElement.value,
      sexe: this.pokemonSexeSelect?.nativeElement.value,
      }
    )
  }
}
