/*
 * @overview        {IndicadorComponent}
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
import { IndicadorViewModel } from '../../model/indicador.model';

/**
 * TODO: Description of {@code IndicadorComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-indicador',
    templateUrl: './indicador.component.html',
    standalone: false,
    styleUrls: ['./indicador.component.css']
})
export class IndicadorComponent extends GenericComponent<IndicadorViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: IndicadorViewModel) {
        super(entityInstance);
    }

}
