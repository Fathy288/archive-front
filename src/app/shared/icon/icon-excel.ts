import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'icon-excel',
    template: `
        <ng-template #template>
            <svg
                version="1.1"
                width="20"
                height="20"
                [ngClass]="class"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="enable-background:new 0 0 512 512;"
                xml:space="preserve"
            >
                <g>
                    <g>
                        <path
                            d="M282.208,19.67c-3.648-3.008-8.48-4.256-13.152-3.392l-256,48C5.472,65.686,0,72.278,0,79.99v352
			c0,7.68,5.472,14.304,13.056,15.712l256,48c0.96,0.192,1.984,0.288,2.944,0.288c3.68,0,7.328-1.28,10.208-3.68
			c3.68-3.04,5.792-7.584,5.792-12.32v-448C288,27.222,285.888,22.71,282.208,19.67z M256,460.694L32,418.71V93.27l224-41.984
			V460.694z"
                        ></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path
                            d="M496,79.99H272c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h208v288H272c-8.832,0-16,7.168-16,16
			c0,8.832,7.168,16,16,16h224c8.832,0,16-7.168,16-16v-320C512,87.158,504.832,79.99,496,79.99z"
                        ></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path
                            d="M336,143.99h-64c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h64c8.832,0,16-7.168,16-16
			C352,151.158,344.832,143.99,336,143.99z"
                        ></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path
                            d="M336,207.99h-64c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h64c8.832,0,16-7.168,16-16
			C352,215.158,344.832,207.99,336,207.99z"
                        ></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path
                            d="M336,271.99h-64c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h64c8.832,0,16-7.168,16-16
			C352,279.158,344.832,271.99,336,271.99z"
                        ></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path
                            d="M336,335.99h-64c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h64c8.832,0,16-7.168,16-16
			C352,343.158,344.832,335.99,336,335.99z"
                        ></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path
                            d="M432,143.99h-32c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h32c8.832,0,16-7.168,16-16
			C448,151.158,440.832,143.99,432,143.99z"
                        ></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path
                            d="M432,207.99h-32c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h32c8.832,0,16-7.168,16-16
			C448,215.158,440.832,207.99,432,207.99z"
                        ></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path
                            d="M432,271.99h-32c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h32c8.832,0,16-7.168,16-16
			C448,279.158,440.832,271.99,432,271.99z"
                        ></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path
                            d="M432,335.99h-32c-8.832,0-16,7.168-16,16c0,8.832,7.168,16,16,16h32c8.832,0,16-7.168,16-16
			C448,343.158,440.832,335.99,432,335.99z"
                        ></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path
                            d="M220.064,309.462l-112-128c-5.888-6.688-15.968-7.328-22.592-1.504c-6.656,5.824-7.328,15.936-1.504,22.56l112,128
			c3.168,3.616,7.584,5.472,12.032,5.472c3.744,0,7.488-1.312,10.56-3.968C225.216,326.198,225.888,316.118,220.064,309.462z"
                        ></path>
                    </g>
                </g>
                <g>
                    <g>
                        <path
                            d="M217.824,163.382c-6.976-5.472-17.024-4.16-22.464,2.784l-112,144c-5.408,6.976-4.16,17.056,2.816,22.464
			c2.944,2.272,6.4,3.36,9.824,3.36c4.736,0,9.472-2.112,12.608-6.144l112-144C226.048,178.838,224.8,168.79,217.824,163.382z"
                        ></path>
                    </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
            </svg>
        </ng-template>
    `,
})
export class IconExcelComponent {
    @Input() class: any = '';
    @ViewChild('template', { static: true }) template: any;
    constructor(private viewContainerRef: ViewContainerRef) {}
    ngOnInit() {
        this.viewContainerRef.createEmbeddedView(this.template);
        this.viewContainerRef.element.nativeElement.remove();
    }
}
