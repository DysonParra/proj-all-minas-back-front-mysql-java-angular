/*
 * @overview        {VehiculoEnTransitoComponent}
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
import { VehiculoEnTransitoViewModel } from '../../model/vehiculo-en-transito.model';

/**
 * TODO: Description of {@code VehiculoEnTransitoComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-vehiculo-en-transito',
    templateUrl: './vehiculo-en-transito.component.html',
    standalone: false,
    styleUrls: ['./vehiculo-en-transito.component.css']
})
export class VehiculoEnTransitoComponent extends GenericComponent<VehiculoEnTransitoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: VehiculoEnTransitoViewModel) {
        super(entityInstance);
    }

}
