/*
 * @fileoverview    {GeneradorPartidaFacade}
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
import { GeneradorPartidaViewModel } from '../model/generador-partida.model';
import { GeneradorPartidaState } from '../state/generador-partida.state';
import { GeneradorPartidaService } from '../service/generador-partida.service';

/**
 * TODO: Description of {@code GeneradorPartidaFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class GeneradorPartidaFacade extends GenericFacade<GeneradorPartidaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: GeneradorPartidaService,
        entityState: GeneradorPartidaState) {
        super(entityService, entityState);
    }

}
