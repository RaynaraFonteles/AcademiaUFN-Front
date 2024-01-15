import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadastroService } from '../../cadastro.service';

@Component({
  selector: 'app-cadastro-turma',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './turma.component.html',
  styleUrl: './turma.component.css'
})

export class CadastroTurmaComponent {
  turmaForm: FormGroup;
  isLoading = false;
  idEscola: any = null
  idTurma: any = null

  constructor(private fb: FormBuilder, private router: Router, private cadastroService: CadastroService) {
    this.turmaForm = this.fb.group({
      descricao: ['', Validators.required]
    });
  }
  
  onSubmit() {
    this.isLoading = true
    if (this.turmaForm.invalid) {
      return;
    }

    this.idEscola = window.location.pathname.split('=')[1]
    const {descricao} = this.turmaForm.value

    this.cadastroService.postTurma(this.idEscola, descricao)
      .then((response) => {
        this.isLoading = false;
        window.sessionStorage.setItem('idTurma', response.data)
        this.router.navigate(['cadastro/turma/alunos', { id: this.idEscola }]);
      })
      .catch((error) => {
        console.error('Erro ao cadastrar patrimonio', error);
        this.isLoading = false;
      });    
  }
}


