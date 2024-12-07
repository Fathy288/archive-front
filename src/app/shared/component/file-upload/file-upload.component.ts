import { NgxDropzoneModule } from 'ngx-dropzone';
import { IconModule } from '../../icon/icon.module';
import { Component, DestroyRef, input, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { NgxTippyModule } from 'ngx-tippy-wrapper';

@Component({
    selector: 'dropzone-file-upload',
    standalone: true,
    imports: [NgxDropzoneModule, IconModule, ReactiveFormsModule, CommonModule, NgxTippyModule],
    templateUrl: './file-upload.component.html',
    styleUrl: './file-upload.component.css',
})
export class FileUploadComponent {
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

    inputId = input<string | null>(null, {
        alias: 'inputId',
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

    showLabel = input<boolean>(true, {
        alias: 'showLabel',
    });

    remoteFiles = input<string[]>(['1', '2', '3'], {
        alias: 'remoteFiles',
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

    files: File[] = [];

    onSelect(event: any) {
        this.files.push(...event.addedFiles);
        this.control()?.patchValue([...this.files]);
    }

    onRemove(event: any) {
        this.files.splice(this.files.indexOf(event), 1);
        this.control()?.patchValue([...this.files]);
    }
}
