/*
 * @fileoverview    {ConfiguracionContainerComponent}
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
import { ConfiguracionViewModel } from '../../model/configuracion.model';
import { ConfiguracionFacade } from '../../facade/configuracion.facade';

/**
 * TODO: Description of {@code ConfiguracionContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-configuracion-container',
    templateUrl: './configuracion-container.component.html',
    standalone: false,
    styleUrls: ['./configuracion-container.component.css']
})
export class ConfiguracionContainerComponent extends GenericContainerComponent<ConfiguracionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ConfiguracionViewModel,
        entityFacade: ConfiguracionFacade) {
        super(entityInstance, entityFacade);
    }

}
