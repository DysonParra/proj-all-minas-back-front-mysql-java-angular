/*
 * @overview        {ContratoFacade}
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
import { ContratoViewModel } from '../model/contrato.model';
import { ContratoState } from '../state/contrato.state';
import { ContratoService } from '../service/contrato.service';

/**
 * TODO: Description of {@code ContratoFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ContratoFacade extends GenericFacade<ContratoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ContratoService,
        entityState: ContratoState) {
        super(entityService, entityState);
    }

}
