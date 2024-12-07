import { Component, input, output } from '@angular/core';

@Component({
    selector: 'action-button',
    standalone: true,
    imports: [],
    templateUrl: './action-button.component.html',
    styleUrl: './action-button.component.css',
})
export class ActionButtonComponent {
    loading = input<boolean>(false, {
        alias: 'loading',
    });
    disabled = input<boolean>(false, {
        alias: 'disabled',
    });
    styleClass = input<string>('', {
        alias: 'styleClass',
    });
    spinnerStyleClass = input<string>('', {
        alias: 'spinnerStyleClass',
    });
    type = input<string>('button', {
        alias: 'type',
    });
    text = input<string>('', {
        alias: 'text',
    });
    onClicked = output<any>();

    handle(event: any): void {
        event.preventDefault();
        this.onClicked.emit('clicked');
    }
}
