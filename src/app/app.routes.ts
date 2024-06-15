import { Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-management', component: UserManagementComponent },
];
