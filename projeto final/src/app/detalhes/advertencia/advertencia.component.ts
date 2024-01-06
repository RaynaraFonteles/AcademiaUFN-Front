import { Component } from '@angular/core';
import { CadastroService } from '../../cadastro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes-advertencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './advertencia.component.html',
  styleUrl: './advertencia.component.css'
})

export class DetalhesAdvertenciaComponent {
  isLoading = false;
  constructor(private cadastroService: CadastroService) {}

}
