/*
 * @fileoverview    {MinaFacade}
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
import { MinaViewModel } from '../model/mina.model';
import { MinaState } from '../state/mina.state';
import { MinaService } from '../service/mina.service';

/**
 * TODO: Description of {@code MinaFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MinaFacade extends GenericFacade<MinaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: MinaService,
        entityState: MinaState) {
        super(entityService, entityState);
    }

}
