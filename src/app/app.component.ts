import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PlatformState } from '@angular/platform-server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SuperUser';
  constructor(
    // private platFormState: PlatformState,private
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('This is a browser platform');
    } else {
      console.log('This is a server platform');
    }
  }
}
