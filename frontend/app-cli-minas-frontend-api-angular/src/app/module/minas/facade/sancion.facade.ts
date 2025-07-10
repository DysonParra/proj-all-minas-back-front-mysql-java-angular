/*
 * @overview        {SancionFacade}
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
import { SancionViewModel } from '../model/sancion.model';
import { SancionState } from '../state/sancion.state';
import { SancionService } from '../service/sancion.service';

/**
 * TODO: Description of {@code SancionFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class SancionFacade extends GenericFacade<SancionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: SancionService,
        entityState: SancionState) {
        super(entityService, entityState);
    }

}
