import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {PokemonItem} from '../pokemon-item/pokemon-item';
import {FormsModule} from '@angular/forms';
import {NgbToast} from '@ng-bootstrap/ng-bootstrap';
import {PokemonService} from '../../services/pokemon-service';
import {Pokemon} from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonItem, FormsModule, NgbToast],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss',
})
export class PokemonList implements AfterViewInit{
  removedPokemonName?: string;
  pokemonList?: Pokemon[];
  @ViewChild('currentPokemonNameInput') currentPokemonNameInput?: ElementRef;

  onAddButtonClick() {
    if(!this.currentPokemonNameInput) return;
    this.pokemonService.addPokemon(this.currentPokemonNameInput.nativeElement.value);
  }

  constructor(private pokemonService: PokemonService) {
  }

  ngAfterViewInit(): void {
    this.pokemonList = this.pokemonService.pokemonList;
  }

}
