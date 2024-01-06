import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastro-materias',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './materias.component.html',
  styleUrl: './materias.component.css'
})

export class CadastroMateriasComponent {
  materiasForm: FormGroup;
  materias: any[] = []
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.materiasForm = this.fb.group({
      nome: ['', Validators.required],
      semestre: ['', Validators.required],
    });
  }
  
  addMaterias() {
    if (this.materiasForm.invalid) {
      return;
    }
    const {nome, semestre} = this.materiasForm.value
    
    this.materias.push({nome, semestre});
    this.materiasForm.reset();
  }

  next() {
    this.router.navigate(['cadastro/provas']);
  }
}


