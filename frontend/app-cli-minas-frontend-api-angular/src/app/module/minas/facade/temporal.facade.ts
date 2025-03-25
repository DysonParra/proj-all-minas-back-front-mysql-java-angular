/*
 * @fileoverview    {TemporalFacade}
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
import { TemporalViewModel } from '../model/temporal.model';
import { TemporalState } from '../state/temporal.state';
import { TemporalService } from '../service/temporal.service';

/**
 * TODO: Description of {@code TemporalFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class TemporalFacade extends GenericFacade<TemporalViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: TemporalService,
        entityState: TemporalState) {
        super(entityService, entityState);
    }

}
