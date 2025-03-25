/*
 * @fileoverview    {TituloMineroContainerComponent}
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
import { TituloMineroViewModel } from '../../model/titulo-minero.model';
import { TituloMineroFacade } from '../../facade/titulo-minero.facade';

/**
 * TODO: Description of {@code TituloMineroContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-titulo-minero-container',
    templateUrl: './titulo-minero-container.component.html',
    standalone: false,
    styleUrls: ['./titulo-minero-container.component.css']
})
export class TituloMineroContainerComponent extends GenericContainerComponent<TituloMineroViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TituloMineroViewModel,
        entityFacade: TituloMineroFacade) {
        super(entityInstance, entityFacade);
    }

}
