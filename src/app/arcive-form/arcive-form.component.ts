import { Component } from '@angular/core';

@Component({
    selector: 'app-arcive-form',
    standalone: true,
    imports: [],
    templateUrl: './arcive-form.component.html',
    styleUrl: './arcive-form.component.css',
})
export class ArciveFormComponent {
    editMode: boolean = false;
    id: string | null = null;
}
