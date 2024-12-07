import { Component, DestroyRef, input, output, TemplateRef } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from '@matheo/text-mask';
import { IconModule } from '../../icon/icon.module';
import { UtilityService } from 'src/app/service/utility.service';
// tippy
import { NgxTippyModule } from 'ngx-tippy-wrapper';

@Component({
    selector: 'normal-hijri-input',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, TextMaskModule, IconModule, NgxTippyModule],
    templateUrl: './hijri-input.component.html',
    styleUrl: './hijri-input.component.css',
})
export class HijriInputComponent {
    label = input<string | null>(null, {
        alias: 'label',
    });

    additionalLabel = input<string | null>(null, {
        alias: 'additionalLabel',
    });

    labelStyleClass = input<string | null>(null, {
        alias: 'labelStyleClass',
    });

    inputStyleClass = input<string | null>(null, {
        alias: 'inputStyleClass',
    });

    errorStyleClass = input<string | null>(null, {
        alias: 'errorStyleClass',
    });

    name = input<string | null>(null, {
        alias: 'name',
    });

    min = input<number | null>(null, {
        alias: 'min',
    });

    max = input<number | null>(null, {
        alias: 'max',
    });

    unit = input<string | null>(null, {
        alias: 'unit',
    });

    inputId = input<string | null>(null, {
        alias: 'inputId',
    });

    inputType = input<'normal' | 'icon' | 'group' | null>('normal', {
        alias: 'inputType',
    });

    control = input<FormControl>(new FormControl(), {
        alias: 'control',
    });

    placeholder = input<string | null>(null, {
        alias: 'placeholder',
    });

    showFeedback = input<boolean>(true, {
        alias: 'showFeedback',
    });

    isRequired = input<boolean>(true, {
        alias: 'isRequired',
    });

    readOnly = input<boolean>(false, {
        alias: 'readOnly',
    });

    disabled = input<boolean>(false, {
        alias: 'disabled',
    });

    showLabel = input<boolean>(true, {
        alias: 'showLabel',
    });

    autoComplete = input<string | null>('off', {
        alias: 'autoComplete',
    });

    mask = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
    valueChanged = output<any>();

    constructor(
        private destroyRef: DestroyRef,
        private utility: UtilityService,
    ) {}

    ngOnInit(): void {
        this.control()
            ?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: () => {
                    this.valueChanged.emit({
                        value: this.control()?.value,
                        valid: this.control()?.valid,
                    });
                    console.log(this.utility.getHijriDateString(this.control().value));
                },
            });
    }

    getFormControlErrors(): any {
        return this.control()?.errors;
    }

    get dateString(): string | null {
        if (!this.control()?.value || this.control()?.value?.length !== 10) return null;
        return this.utility.getHijriDateString(this.control().value);
    }
}
