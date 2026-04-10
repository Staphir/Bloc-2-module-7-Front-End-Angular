import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PokemonList} from './Components/pokemon-list/pokemon-list';
import {
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLinkBase,
  NgbNavLinkButton,
  NgbNavOutlet
} from '@ng-bootstrap/ng-bootstrap';
import {PokemonTop} from './Components/pokemon-top/pokemon-top';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PokemonList, NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLinkButton, NgbNavLinkBase, NgbNavOutlet, PokemonTop],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Pokedex');
  active = 1;
}
