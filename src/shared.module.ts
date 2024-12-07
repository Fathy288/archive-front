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
import { DataTableModule } from '@bhplugin/ng-datatable';
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { NgxCustomModalComponent } from 'ngx-custom-modal';
import { NgSelectModule } from '@ng-select/ng-select';
// flatpicker
import { FlatpickrModule } from 'angularx-flatpickr';
import { TextMaskModule } from '@matheo/text-mask';
import { QuillModule } from 'ngx-quill';

// icons

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TranslateModule.forChild(),
        NgScrollbarModule,
        MenuModule,
        IconModule,
        DataTableModule,
        NgxTippyModule,
        NgxCustomModalComponent,
        NgSelectModule,
        FlatpickrModule,
        TextMaskModule,
        QuillModule.forRoot(),
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NgScrollbarModule,
        MenuModule,
        IconModule,
        DataTableModule,
        NgxTippyModule,
        NgxCustomModalComponent,
        NgSelectModule,
        FlatpickrModule,
        QuillModule,
    ],
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
