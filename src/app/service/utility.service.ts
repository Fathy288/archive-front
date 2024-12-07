import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UtilityService {
    constructor() {}

    getHijriMonths(): string[] {
        return ['محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأول', 'جمادى الثاني', 'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو الحجة', 'ذي القعدة'];
    }

    splitHijriDate(date: string): number[] {
        if (!date) return [];
        return date.split('-').map((item) => parseInt(item));
    }

    getHijriDateString(date: string): string | null {
        if (!date || date?.length !== 10) return null;
        const year = this.splitHijriDate(date)?.[0];
        const month = this.splitHijriDate(date)?.[1];
        const day = this.splitHijriDate(date)?.[2];
        return `يوم ${day} من ${this.getHijriMonths()[month - 1]} لعام ${year} هـ`;
    }
}
