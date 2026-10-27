import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-categoria-form',
  styleUrl: './categoria-form.css',
  templateUrl: './categoria-form.html',
})
export class CategoriaForm {
    // TODO ALUNO: criar FormGroup tipado com descricao, tipo e ativo.
  // TODO ALUNO: injetar CategoriaService e implementar salvar().
  // TODO ALUNO: tratar modo de edição e mensagens de validação.
}
