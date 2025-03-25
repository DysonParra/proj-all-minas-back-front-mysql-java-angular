/*
 * @fileoverview    {TemporalComponent}
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
import { Component } from '@angular/core';
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { TemporalViewModel } from '../../model/temporal.model';

/**
 * TODO: Description of {@code TemporalComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-temporal',
    templateUrl: './temporal.component.html',
    standalone: false,
    styleUrls: ['./temporal.component.css']
})
export class TemporalComponent extends GenericComponent<TemporalViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TemporalViewModel) {
        super(entityInstance);
    }

}
