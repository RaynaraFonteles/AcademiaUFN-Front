import { Component } from '@angular/core';
import { CadastroService } from '../../cadastro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes-prova',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})

export class DetalhesProvaComponent {
  isLoading = false;
  constructor(private cadastroService: CadastroService) {}

}
