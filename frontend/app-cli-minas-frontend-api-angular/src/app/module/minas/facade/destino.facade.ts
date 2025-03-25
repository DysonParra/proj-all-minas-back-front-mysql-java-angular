/*
 * @fileoverview    {DestinoFacade}
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
import { DestinoViewModel } from '../model/destino.model';
import { DestinoState } from '../state/destino.state';
import { DestinoService } from '../service/destino.service';

/**
 * TODO: Description of {@code DestinoFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class DestinoFacade extends GenericFacade<DestinoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: DestinoService,
        entityState: DestinoState) {
        super(entityService, entityState);
    }

}
