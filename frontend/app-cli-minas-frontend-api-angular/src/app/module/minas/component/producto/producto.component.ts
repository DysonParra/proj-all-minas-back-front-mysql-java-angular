/*
 * @fileoverview    {ProductoComponent}
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
import { ProductoViewModel } from '../../model/producto.model';

/**
 * TODO: Description of {@code ProductoComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html',
    standalone: false,
    styleUrls: ['./producto.component.css']
})
export class ProductoComponent extends GenericComponent<ProductoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ProductoViewModel) {
        super(entityInstance);
    }

}
