import { Component } from '@angular/core';
import { CadastroService } from '../../cadastro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes-patrimonio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patrimonio.component.html',
  styleUrl: './patrimonio.component.css'
})

export class DetalhesPatrimonioComponent {
  isLoading = false;
  constructor(private cadastroService: CadastroService) {}

}
