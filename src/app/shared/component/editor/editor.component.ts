import { Component, DestroyRef, input, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import Quill from 'quill';

// const Font: any = Quill.import('formats/font');
// Font.whitelist = ['default', 'roboto', 'arial']; // Add custom fonts here
// Quill.register(Font, true);

@Component({
    selector: 'normal-quill-editor',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, QuillModule],
    templateUrl: './editor.component.html',
    styleUrl: './editor.component.css',
})
export class EditorComponent {
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

    height = input<number>(250, {
        alias: 'height',
    });

    customOptions = [
        {
            import: 'formats/font',
            whitelist: ['noto', 'serif', 'sansserif', 'monospace'],
        },
    ];

    modules = {
        toolbar: [
            [{ size: ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'link', 'strike'],
            [{ font: ['noto', 'serif', 'sansserif', 'monospace'] }],
            [{ align: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['clean'],
            [{ color: [] }, { background: [] }],
            ['link', 'image', 'video'],
            [{ script: 'sub' }, { script: 'super' }],
            [{ direction: 'rtl' }],
        ],
    };

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
