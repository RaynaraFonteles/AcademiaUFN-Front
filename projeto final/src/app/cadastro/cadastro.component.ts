import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroEscolaComponent {
  cadastroForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router, private cadastroService: CadastroService) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
    });
  }
  
  onSubmit() {
    if (this.cadastroForm.invalid) {
      return;
    }

    const {nome, endereco} = this.cadastroForm.value

    this.cadastroService.postEscola(nome, endereco)
      .then(response => {
        this.isLoading = false;
        this.router.navigate(['cadastro/funcionarios', { id: response.data }]);
      })
      .catch(error => {
        console.error('Erro ao carregar escolas', error);
        this.isLoading = false;
      });
  }
}


