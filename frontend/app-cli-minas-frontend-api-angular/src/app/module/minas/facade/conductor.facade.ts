/*
 * @fileoverview    {ConductorFacade}
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
import { ConductorViewModel } from '../model/conductor.model';
import { ConductorState } from '../state/conductor.state';
import { ConductorService } from '../service/conductor.service';

/**
 * TODO: Description of {@code ConductorFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ConductorFacade extends GenericFacade<ConductorViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ConductorService,
        entityState: ConductorState) {
        super(entityService, entityState);
    }

}
