/*
 * @fileoverview    {OrigenComponent}
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
import { OrigenViewModel } from '../../model/origen.model';

/**
 * TODO: Description of {@code OrigenComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-origen',
    templateUrl: './origen.component.html',
    standalone: false,
    styleUrls: ['./origen.component.css']
})
export class OrigenComponent extends GenericComponent<OrigenViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: OrigenViewModel) {
        super(entityInstance);
    }

}
