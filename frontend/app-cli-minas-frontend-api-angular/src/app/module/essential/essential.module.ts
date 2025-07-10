/*
 * @overview        {EssentialModule}
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
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * TODO: Description of {@code EssentialModule}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@NgModule({
    declarations: [ ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    providers: [ ],
    exports: [
        CommonModule,
        RouterModule
    ]
})
export class EssentialModule { }
