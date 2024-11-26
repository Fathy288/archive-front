import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

// service
import { AppService } from 'src/app/service/app.service';

// i18n
import { TranslateModule } from '@ngx-translate/core';

// perfect-scrollbar
import { NgScrollbarModule, provideScrollbarOptions } from 'ngx-scrollbar';

// headlessui
import { MenuModule } from 'headlessui-angular';
import { IconModule } from './app/shared/icon/icon.module';

// icons

@NgModule({
    declarations: [],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, TranslateModule.forChild(), NgScrollbarModule, MenuModule, IconModule],
    exports: [FormsModule, ReactiveFormsModule, TranslateModule, NgScrollbarModule, MenuModule, IconModule],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: SharedModule,
            providers: [
                Title,
                AppService,
                provideScrollbarOptions({
                    visibility: 'hover',
                    appearance: 'compact',
                }),
            ],
        };
    }
}
