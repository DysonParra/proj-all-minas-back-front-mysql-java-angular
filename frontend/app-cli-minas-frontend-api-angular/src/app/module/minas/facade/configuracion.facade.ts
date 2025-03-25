/*
 * @fileoverview    {ConfiguracionFacade}
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
import { ConfiguracionViewModel } from '../model/configuracion.model';
import { ConfiguracionState } from '../state/configuracion.state';
import { ConfiguracionService } from '../service/configuracion.service';

/**
 * TODO: Description of {@code ConfiguracionFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ConfiguracionFacade extends GenericFacade<ConfiguracionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ConfiguracionService,
        entityState: ConfiguracionState) {
        super(entityService, entityState);
    }

}
