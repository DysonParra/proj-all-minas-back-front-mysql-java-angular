/*
 * @fileoverview    {ProveedorContainerComponent}
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
import { ProveedorViewModel } from '../../model/proveedor.model';
import { ProveedorFacade } from '../../facade/proveedor.facade';

/**
 * TODO: Description of {@code ProveedorContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-proveedor-container',
    templateUrl: './proveedor-container.component.html',
    standalone: false,
    styleUrls: ['./proveedor-container.component.css']
})
export class ProveedorContainerComponent extends GenericContainerComponent<ProveedorViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ProveedorViewModel,
        entityFacade: ProveedorFacade) {
        super(entityInstance, entityFacade);
    }

}
