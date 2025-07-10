/*
 * @overview        {CodigoOrigenFacade}
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
import { CodigoOrigenViewModel } from '../model/codigo-origen.model';
import { CodigoOrigenState } from '../state/codigo-origen.state';
import { CodigoOrigenService } from '../service/codigo-origen.service';

/**
 * TODO: Description of {@code CodigoOrigenFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class CodigoOrigenFacade extends GenericFacade<CodigoOrigenViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: CodigoOrigenService,
        entityState: CodigoOrigenState) {
        super(entityService, entityState);
    }

}
