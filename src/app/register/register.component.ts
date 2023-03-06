import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isSaved = false;
  userDetailsForm: FormGroup;
  constructor(private fb: NonNullableFormBuilder) {
    this.userDetailsForm = this.fb.group({
      name: '',
      email: ''
    });
  }

  canDeactivate(): Observable<boolean> {
    if (!this.isSaved) {
      const result = window.confirm('There are unsaved changes! Are you sure?');
      return of(result);
    }
    return of(true);
  }
  onSubmit() {
    this.isSaved = true;
  }
}