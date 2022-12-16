import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class OnlyGuestUsersGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate() {
        if (this.authService.isLoggedIn == false) { 
          return true;
        } else {
          window.alert("You are already logged in");
          this.router.navigate(['/']);
          return false;
        }
      }
}