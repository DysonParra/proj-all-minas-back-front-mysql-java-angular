/*
 * @fileoverview    {VehiculoEnTransitoContainerComponent}
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
import { VehiculoEnTransitoViewModel } from '../../model/vehiculo-en-transito.model';
import { VehiculoEnTransitoFacade } from '../../facade/vehiculo-en-transito.facade';

/**
 * TODO: Description of {@code VehiculoEnTransitoContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-vehiculo-en-transito-container',
    templateUrl: './vehiculo-en-transito-container.component.html',
    standalone: false,
    styleUrls: ['./vehiculo-en-transito-container.component.css']
})
export class VehiculoEnTransitoContainerComponent extends GenericContainerComponent<VehiculoEnTransitoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: VehiculoEnTransitoViewModel,
        entityFacade: VehiculoEnTransitoFacade) {
        super(entityInstance, entityFacade);
    }

}
