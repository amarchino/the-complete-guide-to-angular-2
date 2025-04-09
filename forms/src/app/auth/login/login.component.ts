import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  onSubmit(formData: NgForm) {
    if(formData.form.invalid) {
      console.log('Invalid form');
      return;
    }
    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;
    console.log(formData.form);
    console.log(enteredEmail, enteredPassword)
  }
}
