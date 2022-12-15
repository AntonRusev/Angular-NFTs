import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class OnlyLoggedInUsersGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate() {
        if (this.authService.isLoggedIn) { 
          return true;
        } else {
          window.alert("You need to be logged in to view this page");
          this.router.navigate(['/auth/login']);
          return false;
        }
      }
}