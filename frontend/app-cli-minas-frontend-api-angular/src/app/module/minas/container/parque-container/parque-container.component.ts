/*
 * @fileoverview    {ParqueContainerComponent}
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
import { ParqueViewModel } from '../../model/parque.model';
import { ParqueFacade } from '../../facade/parque.facade';

/**
 * TODO: Description of {@code ParqueContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-parque-container',
    templateUrl: './parque-container.component.html',
    standalone: false,
    styleUrls: ['./parque-container.component.css']
})
export class ParqueContainerComponent extends GenericContainerComponent<ParqueViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ParqueViewModel,
        entityFacade: ParqueFacade) {
        super(entityInstance, entityFacade);
    }

}
