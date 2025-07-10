/*
 * @overview        {ControlAccesoContainerComponent}
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
import { ControlAccesoViewModel } from '../../model/control-acceso.model';
import { ControlAccesoFacade } from '../../facade/control-acceso.facade';

/**
 * TODO: Description of {@code ControlAccesoContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-control-acceso-container',
    templateUrl: './control-acceso-container.component.html',
    standalone: false,
    styleUrls: ['./control-acceso-container.component.css']
})
export class ControlAccesoContainerComponent extends GenericContainerComponent<ControlAccesoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ControlAccesoViewModel,
        entityFacade: ControlAccesoFacade) {
        super(entityInstance, entityFacade);
    }

}
