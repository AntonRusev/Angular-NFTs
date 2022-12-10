import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private authService: AuthService) { }

  get user() {
    const { username, email } = this.authService.user!;
    return {
      username,
      email
    }
  }
}
