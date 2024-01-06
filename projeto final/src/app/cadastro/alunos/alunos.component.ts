import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


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

  constructor(private fb: FormBuilder, private router: Router) {
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
    const {nome, endereco, documento} = this.alunosForm.value
    
    this.alunos.push({nome, endereco, documento});
    this.alunosForm.reset();
  }

  next() {
    this.router.navigate(['cadastro/turma/materias', { id: 1 }]);
  }
}


