/*
 * @fileoverview    {ProveedorComponent}
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
import { ProveedorViewModel } from '../../model/proveedor.model';

/**
 * TODO: Description of {@code ProveedorComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-proveedor',
    templateUrl: './proveedor.component.html',
    standalone: false,
    styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent extends GenericComponent<ProveedorViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ProveedorViewModel) {
        super(entityInstance);
    }

}
