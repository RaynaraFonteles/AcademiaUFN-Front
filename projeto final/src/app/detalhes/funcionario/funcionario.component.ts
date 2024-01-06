import { Component } from '@angular/core';
import { CadastroService } from '../../cadastro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes-funcionarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './funcionario.component.html',
  styleUrl: './funcionario.component.css'
})

export class DetalhesFuncionarioComponent {
  isLoading = false;
  constructor(private cadastroService: CadastroService) {}

}
