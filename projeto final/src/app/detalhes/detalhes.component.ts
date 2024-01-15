import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})

export class DetalhesComponent implements OnInit {
  escola = {} as any;
  isLoading = false;
  escolaForm: FormGroup;
  constructor(private fb: FormBuilder, private cadastroService: CadastroService) {
    this.escolaForm = this.fb.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
    });
  }


  ngOnInit() {
   const id = window.location.pathname.split('=')[1]

   this.cadastroService.getEscolaById(id)
      .then(response => {
        this.escola = response.data
        this.escolaForm.setValue({
          nome: this.escola.nome,
          endereco: this.escola.endereco,
          });
        this.isLoading = false;
      })
      .catch(error => {
        console.error('Erro ao carregar escola', error);
        this.isLoading = false;
      });
  }

  onUpdate() {
    if (this.escolaForm.invalid) {
      return;
    }

    const id =   window.location.pathname.split('=')[1]
    const {nome, endereco} = this.escolaForm.value

    this.cadastroService.updateEscola(id, nome, endereco)
      .then(response => {
        this.isLoading = false;
      })
      .catch(error => {
        console.error('Erro ao editar escola', error);
        this.isLoading = false;
      });
  }
}
