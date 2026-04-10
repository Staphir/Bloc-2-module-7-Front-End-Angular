import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTop } from './pokemon-top';

describe('PokemonTop', () => {
  let component: PokemonTop;
  let fixture: ComponentFixture<PokemonTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonTop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
