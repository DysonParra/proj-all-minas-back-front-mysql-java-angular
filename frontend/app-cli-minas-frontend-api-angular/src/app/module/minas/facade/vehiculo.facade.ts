/*
 * @fileoverview    {VehiculoFacade}
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
import { Injectable } from '@angular/core';
import { GenericFacade } from '@app/module/essential/facade/generic.facade';
import { VehiculoViewModel } from '../model/vehiculo.model';
import { VehiculoState } from '../state/vehiculo.state';
import { VehiculoService } from '../service/vehiculo.service';

/**
 * TODO: Description of {@code VehiculoFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class VehiculoFacade extends GenericFacade<VehiculoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: VehiculoService,
        entityState: VehiculoState) {
        super(entityService, entityState);
    }

}
