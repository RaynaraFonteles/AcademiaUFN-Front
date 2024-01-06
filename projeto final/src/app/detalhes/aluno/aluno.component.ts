import { Component } from '@angular/core';
import { CadastroService } from '../../cadastro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes-aluno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})

export class DetalhesAlunoComponent {
  isLoading = false;
  constructor(private cadastroService: CadastroService) {}

}
