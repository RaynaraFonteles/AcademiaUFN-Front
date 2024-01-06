import { Component } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})

export class DetalhesComponent {
  isLoading = false;
  constructor(private cadastroService: CadastroService) {}

}
