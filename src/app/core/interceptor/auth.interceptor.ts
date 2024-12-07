import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    const token = authService.getLoginUser()?.token;
    if (token) {
        req = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json'),
        });
        return next(req);
    }
    return next(req);
};
