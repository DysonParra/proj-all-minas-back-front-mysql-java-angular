/*
 * @overview        {CierrePartidaContainerComponent}
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
import { CierrePartidaViewModel } from '../../model/cierre-partida.model';
import { CierrePartidaFacade } from '../../facade/cierre-partida.facade';

/**
 * TODO: Description of {@code CierrePartidaContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-cierre-partida-container',
    templateUrl: './cierre-partida-container.component.html',
    standalone: false,
    styleUrls: ['./cierre-partida-container.component.css']
})
export class CierrePartidaContainerComponent extends GenericContainerComponent<CierrePartidaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: CierrePartidaViewModel,
        entityFacade: CierrePartidaFacade) {
        super(entityInstance, entityFacade);
    }

}
