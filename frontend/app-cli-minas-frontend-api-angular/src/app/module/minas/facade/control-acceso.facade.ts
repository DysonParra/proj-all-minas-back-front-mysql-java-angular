/*
 * @fileoverview    {ControlAccesoFacade}
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
import { ControlAccesoViewModel } from '../model/control-acceso.model';
import { ControlAccesoState } from '../state/control-acceso.state';
import { ControlAccesoService } from '../service/control-acceso.service';

/**
 * TODO: Description of {@code ControlAccesoFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ControlAccesoFacade extends GenericFacade<ControlAccesoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ControlAccesoService,
        entityState: ControlAccesoState) {
        super(entityService, entityState);
    }

}
