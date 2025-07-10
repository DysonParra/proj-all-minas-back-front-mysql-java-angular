/*
 * @overview        {OrigenFacade}
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
import { OrigenViewModel } from '../model/origen.model';
import { OrigenState } from '../state/origen.state';
import { OrigenService } from '../service/origen.service';

/**
 * TODO: Description of {@code OrigenFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class OrigenFacade extends GenericFacade<OrigenViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: OrigenService,
        entityState: OrigenState) {
        super(entityService, entityState);
    }

}
