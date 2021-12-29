import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlunoService {
  URL = ''

  constructor(private http: HttpClient) {}

  obterEstudantes() {}
}
