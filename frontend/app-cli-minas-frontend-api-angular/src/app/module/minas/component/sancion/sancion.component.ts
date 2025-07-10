/*
 * @overview        {SancionComponent}
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
import { SancionViewModel } from '../../model/sancion.model';

/**
 * TODO: Description of {@code SancionComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-sancion',
    templateUrl: './sancion.component.html',
    standalone: false,
    styleUrls: ['./sancion.component.css']
})
export class SancionComponent extends GenericComponent<SancionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: SancionViewModel) {
        super(entityInstance);
    }

}
