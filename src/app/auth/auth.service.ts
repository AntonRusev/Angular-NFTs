import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, filter, Subscription, tap } from 'rxjs';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$.asObservable().pipe(
    filter((val): val is IUser | null => val !== undefined)
    );

  // user: IUser | null = { 
  //   username: 'Anton',
  //   email: 'test56@gmail.bg'
  // } as any;

  user: IUser | null = null;

  get isLoggedIn() {
    return this.user !== null;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user;
    });
    const accessToken = localStorage.getItem('accessToken')
   }

  register(username: string, email: string, password: string, rePassword: string) {
    return this.http.post<any>('http://localhost:3030/users/register', { username, email, password, rePassword})
    .pipe(
      tap(res => localStorage.setItem('accessToken', res.accessToken)),
      tap(user => this.user$$.next(user)));
  }

  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:3030/users/login', { username, password })
    .pipe(
      tap(res => localStorage.setItem('accessToken', res.accessToken)),
      tap(user => this.user$$.next(user)));
  }

  logout() {
    return this.http.get<void>('http://localhost:3030/users/logout', {})
    .pipe(
      tap(() => this.user$$.next(null)),
      tap(() => localStorage.clear()));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
