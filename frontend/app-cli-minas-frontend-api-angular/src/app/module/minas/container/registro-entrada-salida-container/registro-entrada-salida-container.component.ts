/*
 * @fileoverview    {RegistroEntradaSalidaContainerComponent}
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
import { RegistroEntradaSalidaViewModel } from '../../model/registro-entrada-salida.model';
import { RegistroEntradaSalidaFacade } from '../../facade/registro-entrada-salida.facade';

/**
 * TODO: Description of {@code RegistroEntradaSalidaContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-registro-entrada-salida-container',
    templateUrl: './registro-entrada-salida-container.component.html',
    standalone: false,
    styleUrls: ['./registro-entrada-salida-container.component.css']
})
export class RegistroEntradaSalidaContainerComponent extends GenericContainerComponent<RegistroEntradaSalidaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: RegistroEntradaSalidaViewModel,
        entityFacade: RegistroEntradaSalidaFacade) {
        super(entityInstance, entityFacade);
    }

}
