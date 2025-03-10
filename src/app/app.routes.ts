import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
    { path: "", component: InicioComponent },
    { path: "registro", component: RegistroComponent }
];
