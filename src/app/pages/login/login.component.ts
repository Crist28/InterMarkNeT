import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { LoginResponse } from '../../interfaces/login';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private clienteService: ClienteService) { }

  login() {
    const data = {
      email: this.email,
      password: this.password
    };
    this.clienteService.loginCliente(data).subscribe(
      response => {
        console.log(response, "Ingreso correctamente");
      },
      error => {
        console.log(error);
      }
    )
  }
}
