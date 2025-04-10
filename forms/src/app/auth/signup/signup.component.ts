import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ ReactiveFormsModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [ Validators.required, Validators.email ]
    }),
    password: new FormControl('', {
      validators: [ Validators.required ]
    })
  });

  onSubmit() {
    console.log(this.form.value);
  }
  onReset() {
    this.form.reset();
  }
}
