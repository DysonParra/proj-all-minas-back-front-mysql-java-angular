/*
 * @fileoverview    {ProductoContainerComponent}
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
import { Component } from '@angular/core';
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { ProductoViewModel } from '../../model/producto.model';
import { ProductoFacade } from '../../facade/producto.facade';

/**
 * TODO: Description of {@code ProductoContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-producto-container',
    templateUrl: './producto-container.component.html',
    standalone: false,
    styleUrls: ['./producto-container.component.css']
})
export class ProductoContainerComponent extends GenericContainerComponent<ProductoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ProductoViewModel,
        entityFacade: ProductoFacade) {
        super(entityInstance, entityFacade);
    }

}
