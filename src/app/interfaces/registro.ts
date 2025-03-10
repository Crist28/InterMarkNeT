export interface Cliente {
    nombres: string;
    apellidos: string;
    email: string;
    password: string;
    perfil?: string;
    telefono?: string;
    rol?: string;
    f_Nacimiento?: string;
    dni?: string;
    pais?: string;
}

export interface ClienteRegistro {
    nombres: string;
    apellidos: string;
    pais?: string;
    email: string;
    password: string;
    perfil?: string;
    telefono?: string;
    rol?: string;
    genero?: string;
    f_Nacimiento?: string;
    dni?: string;
}

export interface RegistroClienteRequest {
    cliente: ClienteRegistro;
    token: string;
}