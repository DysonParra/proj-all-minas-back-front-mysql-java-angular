/*
 * @fileoverview    {TituloMineroFacade}
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
import { TituloMineroViewModel } from '../model/titulo-minero.model';
import { TituloMineroState } from '../state/titulo-minero.state';
import { TituloMineroService } from '../service/titulo-minero.service';

/**
 * TODO: Description of {@code TituloMineroFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class TituloMineroFacade extends GenericFacade<TituloMineroViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: TituloMineroService,
        entityState: TituloMineroState) {
        super(entityService, entityState);
    }

}
