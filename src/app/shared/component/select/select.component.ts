import { Component, DestroyRef, input, output, TemplateRef } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'normal-select',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './select.component.html',
    styleUrl: './select.component.css',
})
export class SelectComponent {
    iconTemplate = input<TemplateRef<any> | null>(null, {
        alias: 'iconTemplate',
    });

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

    options = input<any[]>([], {
        alias: 'options',
    });

    optionLabel = input<string>('', {
        alias: 'optionLabel',
    });

    optionValue = input<any>(null, {
        alias: 'optionValue',
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

    valueChanged = output<any>();

    constructor(private destroyRef: DestroyRef) {}

    ngOnInit(): void {
        this.control()
            ?.valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: () => {
                    this.valueChanged.emit({
                        value: this.control()?.value,
                        valid: this.control()?.valid,
                    });
                },
            });
    }

    getFormControlErrors(): any {
        return this.control()?.errors;
    }
}
