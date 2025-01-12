import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Produtos } from '../../models/produtospic';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgFor],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  @Input() produto! : Produtos;

  produtos : Produtos[] = [
    new Produtos('/pikachu.jpg', 'Pikachu'),
    new Produtos('/charmander.jpg', 'Charmander'),
    new Produtos('/squirtle.jpg', 'Squirtle'),
    new Produtos('/bulbassauro.jpg', 'Bulbassauro'),
    new Produtos('/chikorita.jpg', 'Chikorita'),
    new Produtos('/totodile.jpg', 'Totodile'),
    new Produtos('/caixas.jpg', 'Caixa de TCG'),
    new Produtos('/caixapokemon01.jpg', 'Caixa Pokemon'),
    new Produtos('/caixapokemon02.jpg', 'Caixa Pokemon'),
  ]
}
