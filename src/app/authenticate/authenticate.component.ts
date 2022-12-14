import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

  isAuthenticating: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser()
        this.isAuthenticating = false;
      }
}