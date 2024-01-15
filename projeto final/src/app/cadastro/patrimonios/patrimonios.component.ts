import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadastroService } from '../../cadastro.service';

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
  id: any = null

  constructor(private fb: FormBuilder, private router: Router, private cadastroService: CadastroService) {
    this.patrimoniosForm = this.fb.group({
        nomePatrimonio: ['', Validators.required],
        descricaoPatrimonio: ['', Validators.required],
        statusPatrimonio: ['', Validators.required],
    });
  }
  
  addPatrimonios() {
    if (this.patrimoniosForm.invalid) {
      return;
    }
    this.id = window.location.pathname.split('=')[1]
    const {nomePatrimonio, descricaoPatrimonio, statusPatrimonio} = this.patrimoniosForm.value


    this.cadastroService.postPatrimonios(this.id, nomePatrimonio, descricaoPatrimonio, statusPatrimonio)
      .then(() => {
        this.patrimonios.push({
          nomePatrimonio,
          descricaoPatrimonio,
          statusPatrimonio
        });
        this.patrimoniosForm.reset();
        this.isLoading = false;
      })
      .catch((error) => {
        console.error('Erro ao cadastrar patrimonio', error);
        this.isLoading = false;
      });    
  }

  next() {
    this.router.navigate(['cadastro/turma', { id: this.id }]);
  }
}


