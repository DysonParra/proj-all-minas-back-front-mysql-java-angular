/*
 * @overview        {TituloMineroComponent}
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
import { TituloMineroViewModel } from '../../model/titulo-minero.model';

/**
 * TODO: Description of {@code TituloMineroComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-titulo-minero',
    templateUrl: './titulo-minero.component.html',
    standalone: false,
    styleUrls: ['./titulo-minero.component.css']
})
export class TituloMineroComponent extends GenericComponent<TituloMineroViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TituloMineroViewModel) {
        super(entityInstance);
    }

}
