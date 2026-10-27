import { Component } from '@angular/core';
import { CategoriaForm } from '../categoria-form/categoria-form';

@Component({
  imports: [CategoriaForm],
  selector: 'app-categoria-lista',
  styleUrl: './categoria-lista.css',
  templateUrl: './categoria-lista.html',
})
export class CategoriaLista {}
