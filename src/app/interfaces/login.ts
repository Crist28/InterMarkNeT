export interface Login {
    email: string;
    password: string;
}

interface LoginCliente {
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

export interface LoginResponse {
    data: {
        cliente: {
            nombres: string;
            apellidos: string;
        };
        token: string;
    };
}

