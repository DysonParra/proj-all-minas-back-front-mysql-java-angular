/*
 * @fileoverview    {CodigoOrigenComponent}
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
import { CodigoOrigenViewModel } from '../../model/codigo-origen.model';

/**
 * TODO: Description of {@code CodigoOrigenComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-codigo-origen',
    templateUrl: './codigo-origen.component.html',
    standalone: false,
    styleUrls: ['./codigo-origen.component.css']
})
export class CodigoOrigenComponent extends GenericComponent<CodigoOrigenViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: CodigoOrigenViewModel) {
        super(entityInstance);
    }

}
