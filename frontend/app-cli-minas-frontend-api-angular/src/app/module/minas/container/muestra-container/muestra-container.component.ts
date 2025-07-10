/*
 * @overview        {MuestraContainerComponent}
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
import { MuestraViewModel } from '../../model/muestra.model';
import { MuestraFacade } from '../../facade/muestra.facade';

/**
 * TODO: Description of {@code MuestraContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-muestra-container',
    templateUrl: './muestra-container.component.html',
    standalone: false,
    styleUrls: ['./muestra-container.component.css']
})
export class MuestraContainerComponent extends GenericContainerComponent<MuestraViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MuestraViewModel,
        entityFacade: MuestraFacade) {
        super(entityInstance, entityFacade);
    }

}
