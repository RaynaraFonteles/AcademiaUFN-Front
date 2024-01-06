import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastro-funcionarios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './funcionarios.component.html',
  styleUrl: './funcionarios.component.css'
})

export class CadastroFuncionariosComponent {
  funcionariosForm: FormGroup;
  funcionarios: any[] = []
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.funcionariosForm = this.fb.group({
        nomeFuncionario: ['', Validators.required],
        cargoFuncionario: ['', Validators.required],
    });
  }
  
  addFuncionario() {
    if (this.funcionariosForm.invalid) {
      return;
    }
    const {cargoFuncionario, nomeFuncionario} = this.funcionariosForm.value
    
    this.funcionarios.push({cargoFuncionario, nomeFuncionario});
    this.funcionariosForm.reset();
  }

  next() {
    this.router.navigate(['cadastro/patrimonios', { id: 1 }]);
  }
}


