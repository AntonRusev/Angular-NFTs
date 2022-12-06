import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  loginHandler() {
    if( this.form.invalid) {
      return;
    }
    console.log(this.form.value)
    const { username, password } = this.form.value;
    // TODO
    // this.authService.login(username!, password!)
    //   .subscribe(user => {
    //     this.router.navigate(['/']);
    //   });
  }


}
