import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Inject, Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, Observable, of, switchMap, tap, throwError, withLatestFrom } from "rxjs";
import { AuthService } from "./auth/auth.service";
import { API_ERROR } from "./shared/constants";

@Injectable()
export class AppInterceptor implements HttpInterceptor {

    token: string | null  = localStorage.getItem('token');

    constructor(
        @Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>,
        private router: Router,
        private authService: AuthService) { }


        HEADER_AUTH = 'Authorization';

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const accessToken = localStorage.getItem('accessToken');

        if(accessToken) {
            request = request.clone({
                headers: request.headers.set('Authorization', accessToken)
            });
        }

        return next.handle(request).pipe(
            catchError(err => of(err).pipe(
                withLatestFrom(this.authService.user$),
                switchMap(([err, user]) => {
                    if (err.status === 401) {
                        if (!user) {
                            this.router.navigate(['/auth/login']);
                        } else {
                            this.router.navigate(['/auth/error']);
                        }
                    } else {
                        this.apiError.next(err);
                        this.router.navigate(['/error']);
                    }
                    return throwError(() =>  err);
                })
            )
        ))             
    }
}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
}