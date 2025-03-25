/*
 * @fileoverview    {SancionContainerComponent}
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
import { SancionViewModel } from '../../model/sancion.model';
import { SancionFacade } from '../../facade/sancion.facade';

/**
 * TODO: Description of {@code SancionContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-sancion-container',
    templateUrl: './sancion-container.component.html',
    standalone: false,
    styleUrls: ['./sancion-container.component.css']
})
export class SancionContainerComponent extends GenericContainerComponent<SancionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: SancionViewModel,
        entityFacade: SancionFacade) {
        super(entityInstance, entityFacade);
    }

}
