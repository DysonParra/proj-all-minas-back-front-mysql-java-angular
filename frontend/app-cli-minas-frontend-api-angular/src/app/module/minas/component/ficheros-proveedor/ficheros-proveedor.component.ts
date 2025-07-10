/*
 * @overview        {FicherosProveedorComponent}
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
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { FicherosProveedorViewModel } from '../../model/ficheros-proveedor.model';

/**
 * TODO: Description of {@code FicherosProveedorComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-ficheros-proveedor',
    templateUrl: './ficheros-proveedor.component.html',
    standalone: false,
    styleUrls: ['./ficheros-proveedor.component.css']
})
export class FicherosProveedorComponent extends GenericComponent<FicherosProveedorViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: FicherosProveedorViewModel) {
        super(entityInstance);
    }

}
