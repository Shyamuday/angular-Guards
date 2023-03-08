import { Component } from '@angular/core';

@Component({
  selector: 'app-enhanced-ng-for',
  templateUrl: './enhanced-ng-for.component.html',
  styleUrls: ['./enhanced-ng-for.component.css']
})
export class EnhancedNgForComponent {
  persons?: string[] = undefined;

  clear() {
    this.persons = [];
  }
  add() {
    if (!this.persons) this.persons = [];
    this.persons?.push('tutu');
  }
}
