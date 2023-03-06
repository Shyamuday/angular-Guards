import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private matDialog: MatDialog) { }
  openLoginDialog() {
    this.matDialog.open(LoginComponent, {
      width: "30vw",
      height: "45vh"
    })
  }
}
