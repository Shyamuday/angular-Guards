import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-directive',
  templateUrl: './switch-directive.component.html',
  styleUrls: ['./switch-directive.component.css']
})
export class SwitchDirectiveComponent {
  viewMode = 'map';

  public chooseValue = '';
  numberChange(event: any) {
    this.chooseValue = event.target.value;
  }
}
