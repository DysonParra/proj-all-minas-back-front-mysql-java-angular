/*
 * @overview        {ProductoFacade}
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
import { ProductoViewModel } from '../model/producto.model';
import { ProductoState } from '../state/producto.state';
import { ProductoService } from '../service/producto.service';

/**
 * TODO: Description of {@code ProductoFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ProductoFacade extends GenericFacade<ProductoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ProductoService,
        entityState: ProductoState) {
        super(entityService, entityState);
    }

}
