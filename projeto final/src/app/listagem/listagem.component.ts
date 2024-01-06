import { Component } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})



export class ListagemComponent {
  escolas: any[] = [
    {
      id: 0,
      nome: 'Escola Estadual Dr. Heitor Penteado',
      endereco: 'Rua Profesores dos, 40 - Centro, Americana - SP, 13465-060'
    },
    {
      id: 1,
      nome: 'Colégio São Paulo',
      endereco: 'Av. Cel. Sezefredo Fagundes, 840 - Tucuruvi, São Paulo - SP, 02306-001'
    },
    {
      id: 2,
      nome: 'Colégio São Domingos',
      endereco: 'R. Monte Alegre, 1083 - Perdizes, São Paulo - SP, 05014-001'
    },
  ];
  isLoading = false;
  

  constructor(private cadastroService: CadastroService) {}

}
