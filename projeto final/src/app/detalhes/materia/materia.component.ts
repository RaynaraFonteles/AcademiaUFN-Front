import { Component } from '@angular/core';
import { CadastroService } from '../../cadastro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes-materia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materia.component.html',
  styleUrl: './materia.component.css'
})

export class DetalhesMateriaComponent {
  isLoading = false;
  constructor(private cadastroService: CadastroService) {}

}
