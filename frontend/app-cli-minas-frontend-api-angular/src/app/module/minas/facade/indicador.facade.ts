/*
 * @fileoverview    {IndicadorFacade}
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
import { IndicadorViewModel } from '../model/indicador.model';
import { IndicadorState } from '../state/indicador.state';
import { IndicadorService } from '../service/indicador.service';

/**
 * TODO: Description of {@code IndicadorFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class IndicadorFacade extends GenericFacade<IndicadorViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: IndicadorService,
        entityState: IndicadorState) {
        super(entityService, entityState);
    }

}
