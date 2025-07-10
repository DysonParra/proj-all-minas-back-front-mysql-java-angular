/*
 * @overview        {VehiculoContainerComponent}
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
import { VehiculoViewModel } from '../../model/vehiculo.model';
import { VehiculoFacade } from '../../facade/vehiculo.facade';

/**
 * TODO: Description of {@code VehiculoContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-vehiculo-container',
    templateUrl: './vehiculo-container.component.html',
    standalone: false,
    styleUrls: ['./vehiculo-container.component.css']
})
export class VehiculoContainerComponent extends GenericContainerComponent<VehiculoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: VehiculoViewModel,
        entityFacade: VehiculoFacade) {
        super(entityInstance, entityFacade);
    }

}
