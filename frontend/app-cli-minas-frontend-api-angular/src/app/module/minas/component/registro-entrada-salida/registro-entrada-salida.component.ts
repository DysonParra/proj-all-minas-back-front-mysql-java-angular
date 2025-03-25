/*
 * @fileoverview    {RegistroEntradaSalidaComponent}
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
import { RegistroEntradaSalidaViewModel } from '../../model/registro-entrada-salida.model';

/**
 * TODO: Description of {@code RegistroEntradaSalidaComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-registro-entrada-salida',
    templateUrl: './registro-entrada-salida.component.html',
    standalone: false,
    styleUrls: ['./registro-entrada-salida.component.css']
})
export class RegistroEntradaSalidaComponent extends GenericComponent<RegistroEntradaSalidaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: RegistroEntradaSalidaViewModel) {
        super(entityInstance);
    }

}
