/*
 * @overview        {ConductorContainerComponent}
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
import { ConductorViewModel } from '../../model/conductor.model';
import { ConductorFacade } from '../../facade/conductor.facade';

/**
 * TODO: Description of {@code ConductorContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-conductor-container',
    templateUrl: './conductor-container.component.html',
    standalone: false,
    styleUrls: ['./conductor-container.component.css']
})
export class ConductorContainerComponent extends GenericContainerComponent<ConductorViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ConductorViewModel,
        entityFacade: ConductorFacade) {
        super(entityInstance, entityFacade);
    }

}
