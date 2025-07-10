/*
 * @overview        {VehiculoEnTransitoFacade}
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
import { VehiculoEnTransitoViewModel } from '../model/vehiculo-en-transito.model';
import { VehiculoEnTransitoState } from '../state/vehiculo-en-transito.state';
import { VehiculoEnTransitoService } from '../service/vehiculo-en-transito.service';

/**
 * TODO: Description of {@code VehiculoEnTransitoFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class VehiculoEnTransitoFacade extends GenericFacade<VehiculoEnTransitoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: VehiculoEnTransitoService,
        entityState: VehiculoEnTransitoState) {
        super(entityService, entityState);
    }

}
