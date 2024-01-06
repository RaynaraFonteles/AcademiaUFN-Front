import { Routes } from '@angular/router';
import { Component } from '@angular/core';

// Cadastro
import { CadastroEscolaComponent } from './cadastro/cadastro.component';
import { CadastroFuncionariosComponent } from './cadastro/funcionarios/funcionarios.component';
import { CadastroPatrimoniosComponent } from './cadastro/patrimonios/patrimonios.component';
import { CadastroTurmaComponent } from './cadastro/turma/turma.component';
import { CadastroAlunosComponent } from './cadastro/alunos/alunos.component';
import { CadastroMateriasComponent } from './cadastro/materias/materias.component';
import { CadastroProvasComponent } from './cadastro/provas/provas.component';
import { CadastroAdvertenciasComponent } from './cadastro/advertencias/advertencias.component';

// Listagem
import { ListagemComponent } from './listagem/listagem.component'

// Login 
import { LoginComponent } from './login/login.component'

// Detalhes
import { DetalhesComponent } from './detalhes/detalhes.component'
import { DetalhesFuncionarioComponent } from './detalhes/funcionario/funcionario.component';
import { DetalhesPatrimonioComponent } from './detalhes/patrimonio/patrimonio.component';
import { DetalhesAlunoComponent } from './detalhes/aluno/aluno.component';
import { DetalhesMateriaComponent } from './detalhes/materia/materia.component';
import { DetalhesProvaComponent } from './detalhes/prova/prova.component';
import { DetalhesAdvertenciaComponent } from './detalhes/advertencia/advertencia.component';

// 404
import { PageNotFoundComponent } from './404/404.component'



export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: 'cadastro', component: CadastroEscolaComponent },
  { path: 'cadastro/funcionarios', component: CadastroFuncionariosComponent },
  { path: 'cadastro/patrimonios', component: CadastroPatrimoniosComponent },
  { path: 'cadastro/turma', component: CadastroTurmaComponent },
  { path: 'cadastro/turma/alunos', component: CadastroAlunosComponent },
  { path: 'cadastro/turma/materias', component: CadastroMateriasComponent },
  { path: 'cadastro/provas', component: CadastroProvasComponent },
  { path: 'cadastro/advertencias', component: CadastroAdvertenciasComponent },
  { path: 'detalhes', component: DetalhesComponent },
  { path: 'detalhes/funcionario', component: DetalhesFuncionarioComponent },
  { path: 'detalhes/patrimonio', component: DetalhesPatrimonioComponent },
  { path: 'detalhes/aluno', component: DetalhesAlunoComponent },
  { path: 'detalhes/materia', component: DetalhesMateriaComponent },
  { path: 'detalhes/prova', component: DetalhesProvaComponent },
  { path: 'detalhes/advertencia', component: DetalhesAdvertenciaComponent },
  { path: '**', component: PageNotFoundComponent },
];
