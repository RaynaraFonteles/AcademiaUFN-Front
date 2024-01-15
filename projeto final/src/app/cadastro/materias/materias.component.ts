import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadastroService } from '../../cadastro.service';

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
  id: any = null

  constructor(private fb: FormBuilder, private router: Router, private cadastroService: CadastroService) {
    this.materiasForm = this.fb.group({
      nome: ['', Validators.required],
      semestre: ['', Validators.required],
    });
  }
  
  addMaterias() {
    if (this.materiasForm.invalid) {
      return;
    }

    this.id = window.location.pathname.split('=')[1]
    const {nome, semestre} = this.materiasForm.value

    this.cadastroService.postMateria(this.id, nome, semestre)
      .then(() => {
        this.materias.push({nome, semestre});
    this.materiasForm.reset();
        this.isLoading = false;
      })
      .catch((error) => {
        console.error('Erro ao cadastrar patrimonio', error);
        this.isLoading = false;
      }); 
    
  }

  next() {
    this.router.navigate(['cadastro/provas', { id: this.id }]);
  }
}