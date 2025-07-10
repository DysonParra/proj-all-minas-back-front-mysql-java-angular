/*
 * @overview        {ConfiguracionComponent}
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
import { ConfiguracionViewModel } from '../../model/configuracion.model';

/**
 * TODO: Description of {@code ConfiguracionComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-configuracion',
    templateUrl: './configuracion.component.html',
    standalone: false,
    styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent extends GenericComponent<ConfiguracionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ConfiguracionViewModel) {
        super(entityInstance);
    }

}
