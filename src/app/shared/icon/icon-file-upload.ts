import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'icon-file-upload',
    template: `
        <ng-template #template>
            <svg fill="currentColor" [ngClass]="class" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" data-name="Layer 3">
                <path
                    d="m23.75 11.044a7.99 7.99 0 0 0 -15.5-.009 8 8 0 0 0 .75 15.965h3a1 1 0 0 0 0-2h-3a6 6 0 0 1 -.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0 1.08 1.08 0 0 0 1.073.854 6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                ></path>
                <path
                    d="m20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0 -1.414 0l-5 5a1 1 0 0 0 1.414 1.414l3.293-3.293v12.586a1 1 0 0 0 2 0v-12.586z"
                ></path>
            </svg>
        </ng-template>
    `,
})
export class IconFileUpload {
    @Input() fill: boolean = false;
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
