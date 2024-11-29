import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { delay, filter, map, switchMap, tap } from 'rxjs/operators';
import { LoaderService } from './service/loader.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private loaderService: LoaderService,
    ) {
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationStart || event instanceof RouteConfigLoadStart),
                tap(() => {
                    this.loaderService.startRouterLoader();
                }),
            )
            .subscribe();
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd || event instanceof RouteConfigLoadEnd),
                delay(900),
                tap(() => {
                    this.loaderService.stopRouterLoader();
                }),
            )
            .subscribe();
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => this.activatedRoute),
                map((route) => {
                    while (route.firstChild) route = route.firstChild;
                    return route;
                }),
                filter((route) => route.outlet === 'primary'),
                switchMap((route) => {
                    return route.data.pipe(
                        map((routeData: any) => {
                            const title = routeData['title'];
                            return { title };
                        }),
                    );
                }),
                tap((data: any) => {
                    let title = data.title;
                    title = (title ? title + ' | ' : '') + 'الأرشيف الإلكتروني';
                    this.titleService.setTitle(title);
                }),
            )
            .subscribe();
    }
}
