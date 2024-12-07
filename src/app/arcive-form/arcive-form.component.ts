import { Component } from '@angular/core';
import { EditorComponent } from '../shared/component/editor/editor.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileUploadComponent } from '../shared/component/file-upload/file-upload.component';

@Component({
    selector: 'app-arcive-form',
    standalone: true,
    imports: [EditorComponent, FileUploadComponent],
    templateUrl: './arcive-form.component.html',
    styleUrl: './arcive-form.component.css',
})
export class ArciveFormComponent {
    editMode: boolean = false;
    id: string | null = null;
    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            content: [null, [Validators.required]],
        });
    }

    getFC(ctrl: string): FormControl {
        return this.form.get(ctrl) as FormControl;
    }
}
