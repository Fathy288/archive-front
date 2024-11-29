import { Component, DestroyRef } from '@angular/core';
import { toggleAnimation } from 'src/app/shared/animations';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/service/app.service';
import { SharedModule } from 'src/shared.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    templateUrl: './signin.html',
    animations: [toggleAnimation],
    standalone: true,
    imports: [CommonModule, SharedModule, ReactiveFormsModule, RouterModule],
})
export class SigninComponent {
    store: any;
    form: FormGroup;
    loading: boolean = false;
    constructor(
        public translate: TranslateService,
        public storeData: Store<any>,
        public router: Router,
        private appSetting: AppService,
        private destroyRef: DestroyRef,
        private fb: FormBuilder,
    ) {
        this.initStore();
        this.form = this.fb.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }
    initStore() {
        this.storeData
            .select((d) => d.index)
            .subscribe((d) => {
                this.store = d;
            });
    }

    login(): void {}
}
