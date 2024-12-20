import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ROUTES } from 'src/app/shared/helper/routes';

export const AuthGuard: CanActivateFn = (route, state) => {
    const auth = inject(AuthService);
    const router = inject(Router);
    if (auth.getLoginUser()?.token) return true;
    router.navigate([ROUTES.ABS_LOGIN_URL], { queryParams: { returnURL: state.url } });
    return false;
};
