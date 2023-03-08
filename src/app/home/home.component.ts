import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private matDialog: MatDialog,
    // @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {

    // if (isPlatformBrowser(this.platformId)) {
    //   console.log('This is a browser platform');
    // } else {
    //   console.log('This is a server platform');
    // }
  }

  openLoginDialog() {
    this.matDialog.open(LoginComponent, {
      width: "30vw",
      height: "45vh"
    })
  }
}
