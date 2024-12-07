import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(
        catchError((error: HttpErrorResponse) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // Client-side error
                errorMessage = `Error: ${error.error.message}`;
            } else {
                // Server-side error
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            // Here you can add additional logic for different status codes
            // For example, redirect to login if status code is 401 (Unauthorized)
            if (error.status === 405) {
            } else if (error.status === 403) {
                // Not Authenticated
            } else if (error.status === 404) {
            } else if (error.status === 500) {
            }
            // Re-throw the error so other parts of the app can handle it
            return throwError(() => new Error(errorMessage));
        }),
    );
};
