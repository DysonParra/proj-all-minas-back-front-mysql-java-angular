/*
 * @fileoverview    {MinaComponent}
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
import { MinaViewModel } from '../../model/mina.model';

/**
 * TODO: Description of {@code MinaComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-mina',
    templateUrl: './mina.component.html',
    standalone: false,
    styleUrls: ['./mina.component.css']
})
export class MinaComponent extends GenericComponent<MinaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MinaViewModel) {
        super(entityInstance);
    }

}
