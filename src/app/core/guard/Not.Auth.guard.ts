import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ROUTES } from 'src/app/shared/helper/routes';

export const NotAuthGuard: CanActivateFn = (route, state) => {
    const auth = inject(AuthService);
    const router = inject(Router);
    if (!auth.getLoginUser()?.token) return true;
    router.navigateByUrl(ROUTES.ABS_DASHBOARD_URL);
    return false;
};
