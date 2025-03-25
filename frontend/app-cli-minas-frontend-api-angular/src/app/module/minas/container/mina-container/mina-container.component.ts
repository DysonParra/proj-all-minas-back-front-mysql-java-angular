/*
 * @fileoverview    {MinaContainerComponent}
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
import { MinaViewModel } from '../../model/mina.model';
import { MinaFacade } from '../../facade/mina.facade';

/**
 * TODO: Description of {@code MinaContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-mina-container',
    templateUrl: './mina-container.component.html',
    standalone: false,
    styleUrls: ['./mina-container.component.css']
})
export class MinaContainerComponent extends GenericContainerComponent<MinaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MinaViewModel,
        entityFacade: MinaFacade) {
        super(entityInstance, entityFacade);
    }

}
