import { CommonModule } from '@angular/common';
import { Component, DestroyRef, input, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'normal-radio-input',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './radio-input.component.html',
    styleUrl: './radio-input.component.css',
})
export class RadioInputComponent {
    label = input<string | null>(null, {
        alias: 'label',
    });

    name = input<string>('radio', {
        alias: 'name',
    });

    value = input<string | null>(null, {
        alias: 'value',
    });

    control = input<FormControl>(new FormControl(), {
        alias: 'control',
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

    errorMessage = input<string | null>(null, {
        alias: 'errorMessage',
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
