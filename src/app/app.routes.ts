import { Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UploadArchivesComponent } from './components/upload-archives/upload-archives.component';
import { HomeComponent } from './components/home/home.component';
import { HomeEstudiantesComponent } from './components/home-estudiantes/home-estudiantes.component';
import { CronogramaComponent } from './components/cronograma/cronograma.component';
import { RegistrosProyectoComponent } from './components/registros-proyecto/registros-proyecto.component';
import { SeccionEstudiantesComponent } from './components/seccion-estudiantes/seccion-estudiantes.component';
import { CrearDocentesComponent } from './components/crear-docentes/crear-docentes.component';
import { CrearEstudiantesComponent } from './components/crear-estudiantes/crear-estudiantes.component';
import { CrearProyectoComponent } from './components/crear-proyecto/crear-proyecto.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'upload', component: UploadArchivesComponent},
  { path: 'home', component: HomeComponent},
  { path: '', component:HomeEstudiantesComponent},
  { path: 'cronograma', component:CronogramaComponent},
  { path: 'registro-pro', component:RegistrosProyectoComponent},
  { path: 'seccion-est', component:SeccionEstudiantesComponent},
  { path: 'crea-est', component: CrearEstudiantesComponent},
  { path: 'crea-doc', component: CrearDocentesComponent},
  { path: 'crea-pro', component: CrearProyectoComponent},
  { path: 'crea-cur', component: CrearCursoComponent}
];
