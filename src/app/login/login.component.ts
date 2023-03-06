import { Component } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Login } from '../interface/login.interface';
import { LogInService } from '../log-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  logIn: Login = {} as Login

  loginForm = this.fb.group({
    email: ['', Validators.required],
    position: ['', Validators.required],
    password: ['', Validators.required]
  });


  logInValue: Login = {} as Login
  constructor(private fb: NonNullableFormBuilder, private loginService: LogInService,
    private matDialog: MatDialog, private matDialogRef: MatDialogRef<HomeComponent>, private router: Router) { }
  saveLogInForm() {
    this.logIn.email = this.loginForm.value.email as string;
    this.logIn.password = this.loginForm.value.password as string,
      this.logIn.position = this.loginForm.value.position as string
    localStorage.setItem('logIn', 'logIn')
    this.matDialogRef.close();
    this.matDialog.afterAllClosed.subscribe((response) => {
      this.router.navigate(['/user'])
    })
  }




}
