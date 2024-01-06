import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastro-patrimonios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './patrimonios.component.html',
  styleUrl: './patrimonios.component.css'
})

export class CadastroPatrimoniosComponent {
  patrimoniosForm: FormGroup;
  patrimonios: any[] = []
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.patrimoniosForm = this.fb.group({
        nomePatrimonio: ['', Validators.required],
        descricaoPatrimonio: ['', Validators.required],
        statusPatrimonio: ['', Validators.required],
    });
  }
  
  addFuncionario() {
    if (this.patrimoniosForm.invalid) {
      return;
    }
    const {nomePatrimonio, descricaoPatrimonio, statusPatrimonio} = this.patrimoniosForm.value
    
    this.patrimonios.push({
      nomePatrimonio,
      descricaoPatrimonio,
      statusPatrimonio: JSON.parse(statusPatrimonio) ? 'Ativa' : 'Inativa'
    });
    this.patrimoniosForm.reset();
  }

  next() {
    this.router.navigate(['cadastro/turma', { id: 1 }]);
  }
}


