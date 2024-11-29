import { Component } from '@angular/core';
import { slideDownUp } from './shared/animations';
import { NgxCustomModalComponent } from 'ngx-custom-modal';
import { FlatpickrDefaultsInterface } from 'angularx-flatpickr';

@Component({
    templateUrl: './index.html',
    animations: [slideDownUp],
})
export class IndexComponent {
    treeview1: any = ['all', 'html'];

    docTypes = ['تعميم', 'قرار', 'فتوى', 'بيان'];
    topics = [
        'تعميم وزارة العدل رقم (13/ت/5774) وتاريخ 21/8/1436ه بشأن ضرورة إبلاغ صندوق التنمية الزراعية بكل تحديث للصكوك الزراعية',
        'تعميم وزارة العدل رقم 13/ت/2010 بتاريخ 15/6/1423 هـ بشأن نظام المحاماة',
        'تعميم وزارة العدل رقم (13/ت/9126) وتاريخ 4/3/1445هـ بشأن الإصدار الثالث من الدليل الإجرائي لخدمة التقاضي الإلكتروني',
        'تعميم وزارة العدل رقم (13/ت/8135) بتاريخ 5/10/1441هـ بشأن قرار وزارة العدل رقم (8056) وتاريخ 5/10/1441هـ بشأن إطلاق خدمة (التقاضي عن بعد) والموافقة على الدليل الإجرائي لهذه الخدمة',
    ];
    users = ['أحمد علي', 'فاطمة علي', 'محمد علي', 'سارة علي'];
    hijriDates = ['1445/04/01', '1445/04/02', '1445/04/03', '1445/04/04'];

    cols = [
        { field: 'number', title: 'الرقم', sort: false },
        { field: 'docType', title: 'الوثيقة', sort: true },
        { field: 'topic', title: 'الموضوع', sort: false },
        { field: 'date', title: 'التاريخ', sort: true },
        { field: 'createdAt', title: 'التفاعل', sort: true },
        { field: 'action', title: 'الأدوات', sort: false },
    ];

    rows: any = [];

    search: string = '';

    basic: FlatpickrDefaultsInterface;

    constructor() {
        this.basic = {
            dateFormat: 'Y-m-d',
            monthSelectorType: 'dropdown',
        };
    }

    ngOnInit(): void {
        this.rows = Array.from({ length: 30 }, (_, index) => ({
            id: index + 1,
            docType: this.docTypes[Math.floor(Math.random() * this.docTypes.length)],
            topic: this.topics[Math.floor(Math.random() * this.topics.length)],
            number: Math.floor(1000 + Math.random() * 9000).toString(),
            date: `11-11-2024`,
            hijriDate: this.hijriDates[Math.floor(Math.random() * this.hijriDates.length)],
            user: this.users[Math.floor(Math.random() * this.users.length)],
            createdAt: new Date().toLocaleDateString('en-US'),
            updatedAt: new Date().toLocaleDateString('en-US'),
        }));

        let ele = document.querySelectorAll('.treeview1 button.active') || [];
        if (ele.length > 0) {
            ele.forEach((d: any) => {
                d.click();
            });
        }
    }

    toggleTreeview1(name: string) {
        if (this.treeview1.includes(name)) {
            this.treeview1 = this.treeview1.filter((d: string) => d !== name);
        } else {
            this.treeview1.push(name);
        }
    }

    openFilter(event: Event, modal: NgxCustomModalComponent): void {
        event.preventDefault();
        modal.open();
        console.log(modal);
    }

    resetFilter(event: Event): void {
        event.preventDefault();
    }

    exportExcel(): void {}

    exportCSV(): void {}
}
