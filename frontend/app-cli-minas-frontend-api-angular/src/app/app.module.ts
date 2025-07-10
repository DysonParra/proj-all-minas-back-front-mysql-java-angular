/*
 * @overview        {AppModule}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
// Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Injector } from '@angular/core';
import { UrlSerializer } from '@angular/router';

// Third-party Modules
import { DevExtremeModule, DxLoadIndicatorModule, DxLoadPanelModule } from 'devextreme-angular';

// ROOT Components and Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ROOT Services
import { AppInjector } from './app-injector';

// APPLICATION MODULES
import { EssentialModule } from './module/essential/essential.module';
import { SharedModule } from '@app/module/shared/shared.module';
import { LowerCaseUrlSerializer } from './module/essential/service/url-serializer.service';

// Own Modules
import { MinasModule } from './module/minas/minas.module';

/**
 * TODO: Description of {@code AppModule}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // ng modules
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        // Third party modules
        DxLoadIndicatorModule,
        DxLoadPanelModule,
        DevExtremeModule,
        // Own modules
        EssentialModule,
        SharedModule,
        MinasModule,
    ],
    providers: [
        { provide: UrlSerializer, useClass: LowerCaseUrlSerializer },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(private injector: Injector) {
        AppInjector.getInstance().setInjector(injector);
    }

}
