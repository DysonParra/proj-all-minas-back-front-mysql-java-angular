/*
 * @overview        {VehiculoComponent}
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
import { VehiculoViewModel } from '../../model/vehiculo.model';

/**
 * TODO: Description of {@code VehiculoComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-vehiculo',
    templateUrl: './vehiculo.component.html',
    standalone: false,
    styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent extends GenericComponent<VehiculoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: VehiculoViewModel) {
        super(entityInstance);
    }

}
