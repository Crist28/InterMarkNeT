import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from '../../components/header/header.component';
import { RegistroClienteRequest } from '../../interfaces/registro';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-registro',
  imports: [
    HeaderComponent,
    FormsModule
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  nombres: string = '';
  apellidos: string = '';
  email: string = '';
  password: string = '';
  telefono: string = '';
  genero: string = '';
  f_Nacimiento: string = '';
  pais: string = '';
  dni: string = '';

  constructor( private clienteService: ClienteService ){}

  onSubmit(): void {
    const data: RegistroClienteRequest = {
      cliente: {
        nombres: this.nombres,
        apellidos: this.apellidos,
        email: this.email,
        password: this.password,
        telefono: this.telefono,
        genero: this.genero,
        f_Nacimiento: this.f_Nacimiento,
        pais: this.pais,
        dni: this.dni,
      },
      token: '',
    };
    this.clienteService.registroCliente(data).subscribe(
      response => {
        console.log(response);
      },
      error =>{
        console.log(error);
      }
    )
  }
}
