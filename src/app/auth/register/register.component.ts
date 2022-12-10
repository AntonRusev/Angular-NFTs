import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { matchPasswordValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    rePassword: [],
  },
  {
    validator: matchPasswordValidator('password', 'rePassword')
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  registerHandler() {
    if( this.form.invalid) {
      return;
    }
    console.log(this.form.value)
    const { username, email, password, rePassword} = this.form.value;

    this.authService.register(username!, email!, password!, rePassword!)
      .subscribe(user => {
        this.router.navigate(['/']);
      });
  }
}
