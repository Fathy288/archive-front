import { CommonModule } from '@angular/common';
import { Component, DestroyRef, input, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'normal-check-input',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './check-input.component.html',
    styleUrl: './check-input.component.css',
})
export class CheckInputComponent {
    label = input<string | null>(null, {
        alias: 'label',
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
