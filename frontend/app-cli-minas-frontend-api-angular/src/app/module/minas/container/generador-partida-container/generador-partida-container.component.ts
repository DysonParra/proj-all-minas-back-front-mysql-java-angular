/*
 * @overview        {GeneradorPartidaContainerComponent}
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
import { GeneradorPartidaViewModel } from '../../model/generador-partida.model';
import { GeneradorPartidaFacade } from '../../facade/generador-partida.facade';

/**
 * TODO: Description of {@code GeneradorPartidaContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-generador-partida-container',
    templateUrl: './generador-partida-container.component.html',
    standalone: false,
    styleUrls: ['./generador-partida-container.component.css']
})
export class GeneradorPartidaContainerComponent extends GenericContainerComponent<GeneradorPartidaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: GeneradorPartidaViewModel,
        entityFacade: GeneradorPartidaFacade) {
        super(entityInstance, entityFacade);
    }

}
