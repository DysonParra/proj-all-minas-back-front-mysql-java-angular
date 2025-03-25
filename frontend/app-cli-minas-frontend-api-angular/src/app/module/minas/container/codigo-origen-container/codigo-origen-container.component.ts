/*
 * @fileoverview    {CodigoOrigenContainerComponent}
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
import { CodigoOrigenViewModel } from '../../model/codigo-origen.model';
import { CodigoOrigenFacade } from '../../facade/codigo-origen.facade';

/**
 * TODO: Description of {@code CodigoOrigenContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-codigo-origen-container',
    templateUrl: './codigo-origen-container.component.html',
    standalone: false,
    styleUrls: ['./codigo-origen-container.component.css']
})
export class CodigoOrigenContainerComponent extends GenericContainerComponent<CodigoOrigenViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: CodigoOrigenViewModel,
        entityFacade: CodigoOrigenFacade) {
        super(entityInstance, entityFacade);
    }

}
