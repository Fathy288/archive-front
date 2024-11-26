import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
    providedIn: 'root',
})
export class LoaderService {
    constructor(private storeData: Store<any>) {}

    startMainLoader(): void {
        this.storeData.dispatch({ type: 'toggleMainLoader', payload: true });
    }

    stoptMainLoader(): void {
        this.storeData.dispatch({ type: 'toggleMainLoader', payload: false });
    }
}
