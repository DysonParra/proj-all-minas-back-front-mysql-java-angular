/*
 * @fileoverview    {FicherosProveedorContainerComponent}
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
import { FicherosProveedorViewModel } from '../../model/ficheros-proveedor.model';
import { FicherosProveedorFacade } from '../../facade/ficheros-proveedor.facade';

/**
 * TODO: Description of {@code FicherosProveedorContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-ficheros-proveedor-container',
    templateUrl: './ficheros-proveedor-container.component.html',
    standalone: false,
    styleUrls: ['./ficheros-proveedor-container.component.css']
})
export class FicherosProveedorContainerComponent extends GenericContainerComponent<FicherosProveedorViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: FicherosProveedorViewModel,
        entityFacade: FicherosProveedorFacade) {
        super(entityInstance, entityFacade);
    }

}
