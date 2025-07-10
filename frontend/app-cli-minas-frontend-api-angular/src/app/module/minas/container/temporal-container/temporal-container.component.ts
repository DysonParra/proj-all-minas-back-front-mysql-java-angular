/*
 * @overview        {TemporalContainerComponent}
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
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { TemporalViewModel } from '../../model/temporal.model';
import { TemporalFacade } from '../../facade/temporal.facade';

/**
 * TODO: Description of {@code TemporalContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-temporal-container',
    templateUrl: './temporal-container.component.html',
    standalone: false,
    styleUrls: ['./temporal-container.component.css']
})
export class TemporalContainerComponent extends GenericContainerComponent<TemporalViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TemporalViewModel,
        entityFacade: TemporalFacade) {
        super(entityInstance, entityFacade);
    }

}
