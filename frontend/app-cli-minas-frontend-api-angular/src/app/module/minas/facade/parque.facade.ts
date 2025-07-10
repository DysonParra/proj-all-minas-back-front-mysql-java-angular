/*
 * @overview        {ParqueFacade}
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
import { ParqueViewModel } from '../model/parque.model';
import { ParqueState } from '../state/parque.state';
import { ParqueService } from '../service/parque.service';

/**
 * TODO: Description of {@code ParqueFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ParqueFacade extends GenericFacade<ParqueViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ParqueService,
        entityState: ParqueState) {
        super(entityService, entityState);
    }

}
