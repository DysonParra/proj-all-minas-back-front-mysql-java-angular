/*
 * @fileoverview    {ParqueComponent}
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
import { ParqueViewModel } from '../../model/parque.model';

/**
 * TODO: Description of {@code ParqueComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-parque',
    templateUrl: './parque.component.html',
    standalone: false,
    styleUrls: ['./parque.component.css']
})
export class ParqueComponent extends GenericComponent<ParqueViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ParqueViewModel) {
        super(entityInstance);
    }

}
