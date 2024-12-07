import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin } from '../shared/model/ILogin';
import { IResponse } from '../shared/model/IResponse';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ROUTES } from '../shared/helper/routes';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    loginURL = environment.apiURL + 'User/login';

    constructor(
        private http: HttpClient,
        private store: Store<any>,
        private router: Router,
    ) {}

    saveStorageToken(user: ILogin): void {
        if (!user) return;
        localStorage.setItem('__archive_user', JSON.stringify(user));
    }

    getLoginUser(): ILogin | null {
        if (localStorage.getItem('__archive_user')) {
            return JSON.parse(localStorage.getItem('__archive_user') as any);
        }
        return null;
    }

    login(username: string, password: string): Observable<IResponse<ILogin>> {
        const parsed_username = username?.trim();
        const parsed_password = password?.trim();
        return this.http
            .post<IResponse<ILogin>>(this.loginURL, {
                username: parsed_username,
                password: parsed_password,
            })
            .pipe(
                tap((res) => {
                    this.saveStorageToken(res.data as ILogin);
                    this.store.dispatch({ type: 'setLoginUser', payload: res?.data ? res.data : null });
                }),
                delay(500),
            );
    }

    logout(): void {
        localStorage.removeItem('__archive_user');
        this.store.dispatch({
            type: 'setLoginUser',
            user: null,
        });
        this.router.navigate([ROUTES.ABS_LOGIN_URL]);
    }
}
