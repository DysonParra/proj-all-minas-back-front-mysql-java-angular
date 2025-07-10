/*
 * @overview        {CategoriaContainerComponent}
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
import { CategoriaViewModel } from '../../model/categoria.model';
import { CategoriaFacade } from '../../facade/categoria.facade';

/**
 * TODO: Description of {@code CategoriaContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-categoria-container',
    templateUrl: './categoria-container.component.html',
    standalone: false,
    styleUrls: ['./categoria-container.component.css']
})
export class CategoriaContainerComponent extends GenericContainerComponent<CategoriaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: CategoriaViewModel,
        entityFacade: CategoriaFacade) {
        super(entityInstance, entityFacade);
    }

}
