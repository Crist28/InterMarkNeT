import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Global } from '../environment/global.component';
import { RegistroClienteRequest, Cliente } from '../interfaces/registro';
import { LoginResponse, Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url;

  constructor(private http: HttpClient) {
    this.url = Global.url;
  }

  registroCliente(data: RegistroClienteRequest): Observable<{ data: Cliente[] }> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<{ data: Cliente[] }>(`${this.url}cliente/registro`, data.cliente, { headers: headers }).pipe(
      catchError(error => {
        console.error('Error en el registro:', error);
        return throwError(() => new Error('Error en el registro. Inténtelo de nuevo más tarde.'));
      })
    );
  }
  loginCliente(data: { email: string; password: string }): Observable<LoginResponse> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post<LoginResponse>(this.url + 'cliente/login', data, { headers }).pipe(
      catchError(error => {
        console.error('Error en el login:', error);
        return throwError(() => new Error('Error en el login. Inténtelo de nuevo más tarde.'));
      })
    );
  }
}
