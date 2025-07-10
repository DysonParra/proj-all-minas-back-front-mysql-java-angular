/*
 * @overview        {DestinoContainerComponent}
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
import { DestinoViewModel } from '../../model/destino.model';
import { DestinoFacade } from '../../facade/destino.facade';

/**
 * TODO: Description of {@code DestinoContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-destino-container',
    templateUrl: './destino-container.component.html',
    standalone: false,
    styleUrls: ['./destino-container.component.css']
})
export class DestinoContainerComponent extends GenericContainerComponent<DestinoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: DestinoViewModel,
        entityFacade: DestinoFacade) {
        super(entityInstance, entityFacade);
    }

}
