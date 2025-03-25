/*
 * @fileoverview    {IndicadorContainerComponent}
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
import { IndicadorViewModel } from '../../model/indicador.model';
import { IndicadorFacade } from '../../facade/indicador.facade';

/**
 * TODO: Description of {@code IndicadorContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-indicador-container',
    templateUrl: './indicador-container.component.html',
    standalone: false,
    styleUrls: ['./indicador-container.component.css']
})
export class IndicadorContainerComponent extends GenericContainerComponent<IndicadorViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: IndicadorViewModel,
        entityFacade: IndicadorFacade) {
        super(entityInstance, entityFacade);
    }

}
