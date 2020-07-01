import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Funcionario } from '../models/funcionario';
import { concatMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncService {
  autorList: Array<Funcionario> = [];
  selectedFunc: Funcionario = new Funcionario(); 

  API_URL = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) { }

  getFuncs(){
    return this.http.get(`${this.API_URL}/funcionarios/`);
  }

  insertFunc(objeto){
    return this.http.post(`${this.API_URL}/funcionarios/`,objeto);
  }

  updateFunc(id, objeto){    
    return this.http.put(`${this.API_URL}/funcionarios/${id}/`,objeto);
  }
  
  deleteFunc(id){
    return this.http.delete(`${this.API_URL}/funcionarios/${id}/`);
  }

  getSedes(){
    return this.http.get(`${this.API_URL}/sedes/`);
  }
}
