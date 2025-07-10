/*
 * @overview        {CierrePartidaFacade}
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
import { CierrePartidaViewModel } from '../model/cierre-partida.model';
import { CierrePartidaState } from '../state/cierre-partida.state';
import { CierrePartidaService } from '../service/cierre-partida.service';

/**
 * TODO: Description of {@code CierrePartidaFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class CierrePartidaFacade extends GenericFacade<CierrePartidaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: CierrePartidaService,
        entityState: CierrePartidaState) {
        super(entityService, entityState);
    }

}
