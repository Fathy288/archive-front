import { Component, DestroyRef } from '@angular/core';
import { toggleAnimation } from 'src/app/shared/animations';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from 'src/shared.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from 'src/app/shared/component/input/input.component';
import { ActionButtonComponent } from 'src/app/shared/component/action-button/action-button.component';
import { CheckInputComponent } from 'src/app/shared/component/check-input/check-input.component';
import { AuthService } from 'src/app/service/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ROUTES } from 'src/app/shared/helper/routes';

@Component({
    templateUrl: './signin.html',
    animations: [toggleAnimation],
    standalone: true,
    imports: [CommonModule, SharedModule, ReactiveFormsModule, RouterModule, InputComponent, ActionButtonComponent, CheckInputComponent],
})
export class SigninComponent {
    store: any;
    form: FormGroup;
    loading: boolean = false;
    succeeded: boolean | null = null;
    redirect: string = '/';
    constructor(
        public translate: TranslateService,
        public storeData: Store<any>,
        public router: Router,
        private destroyRef: DestroyRef,
        private fb: FormBuilder,
        private auth: AuthService,
        private route: ActivatedRoute,
    ) {
        this.initStore();
        this.form = this.fb.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]],
            checked: [false, [Validators.required]],
        });
        this.redirect = this.route.snapshot.queryParams['returnURL'] || '/';
    }
    initStore() {
        this.storeData
            .select((d) => d.index)
            .subscribe((d) => {
                this.store = d;
            });
    }

    getFC(control: string): FormControl {
        return this?.form?.get(control) as FormControl;
    }

    getFCV(control: string): any {
        return this?.form?.get(control)?.value;
    }

    login(): void {
        if (!this.form.valid) {
            this.form.markAllAsTouched();
            return;
        }
        this.loading = true;
        this.auth
            .login(this.getFCV('username'), this.getFCV('password'))
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: (res) => {
                    this.succeeded = true;
                    let timeout: any;
                    timeout = setTimeout(() => {
                        this.succeeded = null;
                        this.loading = false;
                        clearTimeout(timeout);
                        this.router.navigate([this.redirect]);
                    }, 1500);
                },
                error: () => {
                    this.succeeded = false;
                    this.loading = false;
                    this.form.reset();
                    let timeout: any;
                    timeout = setTimeout(() => {
                        this.succeeded = null;
                        clearTimeout(timeout);
                    }, 3000);
                },
            });
    }
}
