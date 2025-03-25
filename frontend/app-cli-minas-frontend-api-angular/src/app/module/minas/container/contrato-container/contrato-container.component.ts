/*
 * @fileoverview    {ContratoContainerComponent}
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
import { ContratoViewModel } from '../../model/contrato.model';
import { ContratoFacade } from '../../facade/contrato.facade';

/**
 * TODO: Description of {@code ContratoContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-contrato-container',
    templateUrl: './contrato-container.component.html',
    standalone: false,
    styleUrls: ['./contrato-container.component.css']
})
export class ContratoContainerComponent extends GenericContainerComponent<ContratoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ContratoViewModel,
        entityFacade: ContratoFacade) {
        super(entityInstance, entityFacade);
    }

}
