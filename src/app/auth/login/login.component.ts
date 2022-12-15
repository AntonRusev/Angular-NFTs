import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) { }

  loginHandler() {
    if( this.form.invalid) {
      return;
    }
    console.log(this.form.value)
    const { username, password } = this.form.value;

    this.authService.login(username!, password!)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
    // this.authService.login(username!, password!)
    // .subscribe(res => console.log(res));

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    
    this.router.navigate([returnUrl]);
  }


}
