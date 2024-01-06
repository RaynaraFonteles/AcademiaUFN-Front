import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


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

  constructor(private fb: FormBuilder, private router: Router) {
    this.turmaForm = this.fb.group({
      descricao: ['', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.turmaForm.invalid) {
      return;
    }

    this.router.navigate(['cadastro/turma/alunos', { id: 1 }]);
  }
}


