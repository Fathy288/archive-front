import { Component, DestroyRef, input, output, TemplateRef } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from '@matheo/text-mask';

@Component({
    selector: 'normal-mask-input',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, TextMaskModule],
    templateUrl: './mask-input.component.html',
    styleUrl: './mask-input.component.css',
})
export class MaskInputComponent {
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

    type = input<string | null>('text', {
        alias: 'type',
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

    mask = input<any[]>([], {
        alias: 'mask',
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
