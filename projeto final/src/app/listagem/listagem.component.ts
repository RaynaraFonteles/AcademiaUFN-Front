import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})


export class ListagemComponent implements OnInit {
  escolas: any[] = []
  isLoading = true;

  constructor(private cadastroService: CadastroService) {}

  ngOnInit() {
    this.cadastroService.getAllEscolas()
      .then(response => {
        this.escolas = response.data
        this.isLoading = false;
      })
      .catch(error => {
        console.error('Erro ao carregar escolas', error);
        this.isLoading = false;
      });
  }


  handleDelete(id: number) {
    this.isLoading = true;
    this.cadastroService.deleteEscola(id)
      .then(() => {
        window.location.reload();
        this.isLoading = false;
      })
      .catch(error => {
        console.error('Erro ao deletar escola', error);
        this.isLoading = false;
      });
  }
}