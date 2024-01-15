import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadastroService } from '../../cadastro.service';


@Component({
  selector: 'app-cadastro-alunos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})

export class CadastroAlunosComponent {
  alunosForm: FormGroup;
  alunos: any[] = []
  isLoading = false;
  id: any = null

  constructor(private fb: FormBuilder, private router: Router, private cadastroService: CadastroService) {
    this.alunosForm = this.fb.group({
        nome: ['', Validators.required],
        endereco: ['', Validators.required],
        documento: ['', Validators.required],
    });
  }
  
  addAlunos() {
    if (this.alunosForm.invalid) {
      return;
    }
    this.id = window.location.pathname.split('=')[1]
    const {nome, endereco, documento} = this.alunosForm.value
    const idTurma = window.sessionStorage.getItem('idTurma')
    this.cadastroService.postAluno(this.id, nome, endereco, documento)
      .then(() => {
        this.alunos.push({nome, endereco, documento});
        const alunosLocal = {
          idEscola: this.id,
          idTurma,
          nome,
          endereco,
          documento
        }
        window.localStorage.setItem(`${idTurma}`, JSON.stringify(alunosLocal))
        this.alunosForm.reset();
        this.isLoading = false;
      })
      .catch((error) => {
        console.error('Erro ao cadastrar patrimonio', error);
        this.isLoading = false;
      }); 
    
  }

  next() {
    this.router.navigate(['cadastro/turma/materias', { id: this.id }]);
  }
}


