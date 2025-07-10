/*
 * @overview        {MuestraFacade}
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
import { MuestraViewModel } from '../model/muestra.model';
import { MuestraState } from '../state/muestra.state';
import { MuestraService } from '../service/muestra.service';

/**
 * TODO: Description of {@code MuestraFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MuestraFacade extends GenericFacade<MuestraViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: MuestraService,
        entityState: MuestraState) {
        super(entityService, entityState);
    }

}
