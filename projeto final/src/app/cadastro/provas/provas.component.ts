import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastro-provas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './provas.component.html',
  styleUrl: './provas.component.css'
})

export class CadastroProvasComponent {
  provasForm: FormGroup;
  provas: any[] = []
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
  materias = [
    {
      id: 1,
      nome: 'História'
    },
    {
      id: 2,
      nome: 'Matemática'
    },
    {
      id: 3,
      nome: 'Sociologia'
    }
  ]
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.provasForm = this.fb.group({
      aluno: ['', Validators.required],
      materia: ['', Validators.required],
      nota: ['', Validators.required],
    });
  }
  
  addProvas() {
    if (this.provasForm.invalid) {
      return;
    }
    const { aluno, materia, nota } = this.provasForm.value

    this.provas.push({
      aluno: this.alunos?.find(al => al.id == aluno)?.nome,
      materia: this.materias?.find(mt => mt.id == materia)?.nome,
      nota
    });

    this.provasForm.reset();
  }

  next() {
    this.router.navigate(['cadastro/advertencias']);
  }
}


