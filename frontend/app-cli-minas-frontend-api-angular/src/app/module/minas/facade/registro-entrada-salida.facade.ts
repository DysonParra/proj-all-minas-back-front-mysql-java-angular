/*
 * @overview        {RegistroEntradaSalidaFacade}
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
import { Injectable } from '@angular/core';
import { GenericFacade } from '@app/module/essential/facade/generic.facade';
import { RegistroEntradaSalidaViewModel } from '../model/registro-entrada-salida.model';
import { RegistroEntradaSalidaState } from '../state/registro-entrada-salida.state';
import { RegistroEntradaSalidaService } from '../service/registro-entrada-salida.service';

/**
 * TODO: Description of {@code RegistroEntradaSalidaFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class RegistroEntradaSalidaFacade extends GenericFacade<RegistroEntradaSalidaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: RegistroEntradaSalidaService,
        entityState: RegistroEntradaSalidaState) {
        super(entityService, entityState);
    }

}
