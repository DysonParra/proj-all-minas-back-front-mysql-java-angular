/*
 * @overview        {FicherosProveedorFacade}
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
import { FicherosProveedorViewModel } from '../model/ficheros-proveedor.model';
import { FicherosProveedorState } from '../state/ficheros-proveedor.state';
import { FicherosProveedorService } from '../service/ficheros-proveedor.service';

/**
 * TODO: Description of {@code FicherosProveedorFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class FicherosProveedorFacade extends GenericFacade<FicherosProveedorViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: FicherosProveedorService,
        entityState: FicherosProveedorState) {
        super(entityService, entityState);
    }

}
