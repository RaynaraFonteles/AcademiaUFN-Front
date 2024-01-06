import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastro-advertencias',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './advertencias.component.html',
  styleUrl: './advertencias.component.css'
})

export class CadastroAdvertenciasComponent {
  advertenciasForm: FormGroup;
  advertencias: any[] = []
  alunos = [
    {
      id: 1,
      nome: 'Cleber Vasconcelos'
    },
    {
      id: 2,
      nome: 'Raynara Fonteles'
    },
    {
      id: 3,
      nome: 'Cristiano Ronaldo'
    }
  ]
  isLoading = false;
  done = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.advertenciasForm = this.fb.group({
      aluno: ['', Validators.required],
      descricao: ['', Validators.required],
      status: ['', Validators.required],
    });
  }
  
  addAdvertencia() {
    if (this.advertenciasForm.invalid) {
      return;
    }
    const { aluno, descricao, status } = this.advertenciasForm.value

    this.advertencias.push({
      aluno: this.alunos?.find(al => al.id == aluno)?.nome,
      descricao,
      status: JSON.parse(status) ? 'Ativa' : 'Inativa'
    });

    this.advertenciasForm.reset();
  }

  next() {
    this.done = true
  }
}


