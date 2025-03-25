/*
 * @fileoverview    {BasculaFacade}
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
import { BasculaViewModel } from '../model/bascula.model';
import { BasculaState } from '../state/bascula.state';
import { BasculaService } from '../service/bascula.service';

/**
 * TODO: Description of {@code BasculaFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class BasculaFacade extends GenericFacade<BasculaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: BasculaService,
        entityState: BasculaState) {
        super(entityService, entityState);
    }

}
