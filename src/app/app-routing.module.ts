import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { CanDeactivateGuard } from './de-activate.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', canActivate: [AuthGuard], component: UserComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'switches', component: SwitchDirectiveComponent },
  { path: 'register', component: RegisterComponent, canDeactivate: [CanDeactivateGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }