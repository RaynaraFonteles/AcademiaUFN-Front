import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from '../../cadastro.service';
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
  id: any = null

  constructor(private fb: FormBuilder, private router: Router, private cadastroService: CadastroService) {
    this.funcionariosForm = this.fb.group({
        nomeFuncionario: ['', Validators.required],
        cargoFuncionario: ['', Validators.required],
    });
  }
  
  addFuncionario() {
    if (this.funcionariosForm.invalid) {
      return;
    }
   
    this.id = window.location.pathname.split('=')[1]
    const {cargoFuncionario, nomeFuncionario} = this.funcionariosForm.value

    this.cadastroService.postFuncionarios(this.id, nomeFuncionario, cargoFuncionario)
      .then(() => {
        this.funcionarios.push({cargoFuncionario, nomeFuncionario});
        this.funcionariosForm.reset();
        this.isLoading = false;
      })
      .catch((error) => {
        console.error('Erro ao cadastrar funcionario', error);
        this.isLoading = false;
      });
  }

  next() {
    this.router.navigate(['cadastro/patrimonios', { id: this.id }]);
  }
}


