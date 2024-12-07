import { Component, DestroyRef } from '@angular/core';
import { toggleAnimation } from 'src/app/shared/animations';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/service/app.service';
import { SharedModule } from 'src/shared.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from 'src/app/shared/component/input/input.component';
import { ActionButtonComponent } from 'src/app/shared/component/action-button/action-button.component';
import { SelectComponent } from '../../shared/component/select/select.component';
import { CheckInputComponent } from 'src/app/shared/component/check-input/check-input.component';
import { RadioInputComponent } from 'src/app/shared/component/radio-input/radio-input.component';
import { DateInputComponent } from '../../shared/component/date-input/date-input.component';
import { HijriInputComponent } from '../../shared/component/hijri-input/hijri-input.component';
import { UtilityService } from 'src/app/service/utility.service';
import { NgSelectComponent } from '../../shared/component/ng-select/ng-select.component';

@Component({
    templateUrl: './signin.html',
    animations: [toggleAnimation],
    standalone: true,
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        RouterModule,
        InputComponent,
        ActionButtonComponent,
        CheckInputComponent,
        RadioInputComponent,
        DateInputComponent,
        HijriInputComponent,
        NgSelectComponent,
    ],
})
export class SigninComponent {
    options = [
        {
            id: 1,
            label: 'رقم واحد',
        },
        {
            id: 2,
            label: 'رقم اتنين',
        },
    ];
    store: any;
    form: FormGroup;
    loading: boolean = false;
    mask1 = [/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];
    constructor(
        public translate: TranslateService,
        public storeData: Store<any>,
        public router: Router,
        private appSetting: AppService,
        private destroyRef: DestroyRef,
        private fb: FormBuilder,
        private utility: UtilityService,
    ) {
        this.initStore();
        this.form = this.fb.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]],
            date: [null, [Validators.required]],
            checked: [false, [Validators.required]],
        });
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

    login(): void {
        this.form.markAllAsTouched();
    }
}
