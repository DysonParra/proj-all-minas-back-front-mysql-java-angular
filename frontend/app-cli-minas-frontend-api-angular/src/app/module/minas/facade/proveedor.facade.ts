/*
 * @fileoverview    {ProveedorFacade}
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
import { ProveedorViewModel } from '../model/proveedor.model';
import { ProveedorState } from '../state/proveedor.state';
import { ProveedorService } from '../service/proveedor.service';

/**
 * TODO: Description of {@code ProveedorFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ProveedorFacade extends GenericFacade<ProveedorViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ProveedorService,
        entityState: ProveedorState) {
        super(entityService, entityState);
    }

}
