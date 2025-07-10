/*
 * @overview        {ConsecutivoDiarioFacade}
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
import { ConsecutivoDiarioViewModel } from '../model/consecutivo-diario.model';
import { ConsecutivoDiarioState } from '../state/consecutivo-diario.state';
import { ConsecutivoDiarioService } from '../service/consecutivo-diario.service';

/**
 * TODO: Description of {@code ConsecutivoDiarioFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ConsecutivoDiarioFacade extends GenericFacade<ConsecutivoDiarioViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ConsecutivoDiarioService,
        entityState: ConsecutivoDiarioState) {
        super(entityService, entityState);
    }

}
