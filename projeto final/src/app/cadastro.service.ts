import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class CadastroService {
  private apiUrl = 'https://random-data-api.com/api/v2/users?size=10';
  constructor() { }
}
