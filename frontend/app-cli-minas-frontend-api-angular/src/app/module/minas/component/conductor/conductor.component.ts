/*
 * @overview        {ConductorComponent}
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
import { ConductorViewModel } from '../../model/conductor.model';

/**
 * TODO: Description of {@code ConductorComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-conductor',
    templateUrl: './conductor.component.html',
    standalone: false,
    styleUrls: ['./conductor.component.css']
})
export class ConductorComponent extends GenericComponent<ConductorViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ConductorViewModel) {
        super(entityInstance);
    }

}
