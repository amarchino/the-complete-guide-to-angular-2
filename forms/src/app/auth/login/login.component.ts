import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private form = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const subscription = this.form().valueChanges?.pipe(debounceTime(500))
        .subscribe({
          next: value => window.localStorage.setItem('saved-login-form', JSON.stringify({ email: value.email }))
        })
      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }

  onSubmit(formData: NgForm) {
    if(formData.form.invalid) {
      console.log('Invalid form');
      return;
    }
    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;
    console.log(formData.form);
    console.log(enteredEmail, enteredPassword);

    formData.form.reset();
  }
}
