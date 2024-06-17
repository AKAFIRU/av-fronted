import { Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { UploadArchivesComponent } from './components/upload-archives/upload-archives.component';
export const routes: Routes = [
  { path: 'user-management', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: UserManagementComponent },
  { path: 'upload', component: UploadArchivesComponent}
];
