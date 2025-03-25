/*
 * @fileoverview    {OrigenContainerComponent}
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
import { OrigenViewModel } from '../../model/origen.model';
import { OrigenFacade } from '../../facade/origen.facade';

/**
 * TODO: Description of {@code OrigenContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-origen-container',
    templateUrl: './origen-container.component.html',
    standalone: false,
    styleUrls: ['./origen-container.component.css']
})
export class OrigenContainerComponent extends GenericContainerComponent<OrigenViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: OrigenViewModel,
        entityFacade: OrigenFacade) {
        super(entityInstance, entityFacade);
    }

}
