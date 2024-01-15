import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class CadastroService {
  private apiUrl = 'http://localhost:8093/escolas';
  constructor() { }
  

  // ESCOLAS
  async getAllEscolas() {
    const response = axios.get(this.apiUrl, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYXluYXJhIiwiaWF0IjoxNzA1MjA2NDg0LCJleHAiOjE3MDUyOTI4ODR9.82Q6Yj4S_6QOJL7llMTUDCrqiaW9YLkEZeAato-YAxo'
      }
    });
    return response
  }

  async getEscolaById(id: string) {
    const response = axios.request({
        method: 'get',
        url: `${this.apiUrl}/${id}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYXluYXJhIiwiaWF0IjoxNzA1MjQ1MjcxLCJleHAiOjE3MDUzMzE2NzF9.J9aHMb0Vx07gUgIM1wRtdo5KeReH0Bv5DArOdvNfzGc'
        }
      }
    );
    return response
  }

  async postEscola(nome: string, endereco: string) {
    const response = axios.request({
        method: 'POST',
        url: this.apiUrl,
        data: {nome, endereco},
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYXluYXJhIiwiaWF0IjoxNzA1MjA1OTk5LCJleHAiOjE3MDUyOTIzOTl9.e4PWArxMat4ALurhHrvzyb1941XBQRCfNLsq7zrndAc'
        }
      }
    );
    return response
  }

  async deleteEscola(id: number) {
    const response = axios.request({
        method: 'DELETE',
        url: `${this.apiUrl}/${id}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYXluYXJhIiwiaWF0IjoxNzA1MjQ1MjcxLCJleHAiOjE3MDUzMzE2NzF9.J9aHMb0Vx07gUgIM1wRtdo5KeReH0Bv5DArOdvNfzGc'
        }
      }
    );
    return response
  }
  
  async updateEscola(id: string, nome: string, endereco: string) {
    const response = axios.request({
        method: 'PUT',
        url: this.apiUrl,
        data: {id, nome, endereco},
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYXluYXJhIiwiaWF0IjoxNzA1MjA1OTk5LCJleHAiOjE3MDUyOTIzOTl9.e4PWArxMat4ALurhHrvzyb1941XBQRCfNLsq7zrndAc'
        }
      }
    );
    return response
  }

  // FUNCIONARIOS
  async postFuncionarios(id: string, nome: string, funcao: string) {
    const response = axios.request({
        method: 'POST',
        url: `${this.apiUrl}/${id}/funcionarios`,
        data: {nome, funcao},
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYXluYXJhIiwiaWF0IjoxNzA1MjA1OTk5LCJleHAiOjE3MDUyOTIzOTl9.e4PWArxMat4ALurhHrvzyb1941XBQRCfNLsq7zrndAc'
        }
      }
    );
    return response
  }

   // PATRIMONIO
   async postPatrimonios(id: string, nome: string, descricao: string, status: string) {
    const response = axios.request({
        method: 'POST',
        url: `${this.apiUrl}/${id}/patrimonio`,
        data: {nome, descricao, status},
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYXluYXJhIiwiaWF0IjoxNzA1MjA1OTk5LCJleHAiOjE3MDUyOTIzOTl9.e4PWArxMat4ALurhHrvzyb1941XBQRCfNLsq7zrndAc'
        }
      }
    );
    return response
  }

  // TURMA
  async postTurma(id: string, descricao: string) {
    const response = axios.request({
        method: 'POST',
        url: `${this.apiUrl}/${id}/turma`,
        data: {descricao},
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYXluYXJhIiwiaWF0IjoxNzA1MjA1OTk5LCJleHAiOjE3MDUyOTIzOTl9.e4PWArxMat4ALurhHrvzyb1941XBQRCfNLsq7zrndAc'
        }
      }
    );
    return response
  }

  // Aluno
  async postAluno(id: string, nome: string, endereco: string, documento: string) {
    const idTurma = window.sessionStorage.getItem('idTurma')
    const response = axios.request({
        method: 'POST',
        url: `${this.apiUrl}/${id}/turmas/${idTurma}/alunos`,
        data: {nome, endereco, documento},
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYXluYXJhIiwiaWF0IjoxNzA1MjA1OTk5LCJleHAiOjE3MDUyOTIzOTl9.e4PWArxMat4ALurhHrvzyb1941XBQRCfNLsq7zrndAc'
        }
      }
    );
    return response
  }

  // Materias
  async postMateria(id: string, materia: string, tempoSemestre: string | number) {
    const idTurma = window.sessionStorage.getItem('idTurma')
    const response = axios.request({
        method: 'POST',
        url: `${this.apiUrl}/${id}/turmas/${idTurma}/materias`,
        data: {materia, tempoSemestre},
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYXluYXJhIiwiaWF0IjoxNzA1MjA1OTk5LCJleHAiOjE3MDUyOTIzOTl9.e4PWArxMat4ALurhHrvzyb1941XBQRCfNLsq7zrndAc'
        }
      }
    );
    return response
  }
}
