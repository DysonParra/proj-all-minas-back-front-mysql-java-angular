/*
 * @overview        {SharedModule}
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
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DxMenuModule } from 'devextreme-angular';

import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { PaginationComponent } from './component/pagination/pagination.component';

/**
 * TODO: Description of {@code SharedModule}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        CommonModule,
        DxMenuModule,
        RouterModule
    ],
    declarations: [HeaderComponent, FooterComponent, PaginationComponent],
    exports: [HeaderComponent, FooterComponent, PaginationComponent]
})
export class SharedModule { }
