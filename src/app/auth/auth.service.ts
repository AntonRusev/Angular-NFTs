import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // user: IUser | null = { 
  //   username: 'Anton',
  //   email: 'test56@gmail.bg'
  // } as any;

  user: IUser | null = null;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor() { }

  register(username: string, email: string, password: string, rePassword: string) {
  }

  login(username: string, password: string) {
  }

  logout() {
  }
}
