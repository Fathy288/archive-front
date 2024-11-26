import { Component } from '@angular/core';
import { slideDownUp } from './shared/animations';

@Component({
    templateUrl: './index.html',
    animations: [slideDownUp],
})
export class IndexComponent {
    treeview1: any = ['all', 'html'];

    ngOnInit(): void {
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
}
