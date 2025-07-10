/*
 * @overview        {CategoriaComponent}
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
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { CategoriaViewModel } from '../../model/categoria.model';

/**
 * TODO: Description of {@code CategoriaComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-categoria',
    templateUrl: './categoria.component.html',
    standalone: false,
    styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent extends GenericComponent<CategoriaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: CategoriaViewModel) {
        super(entityInstance);
    }

}
