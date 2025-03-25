/*
 * @fileoverview    {DestinoComponent}
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
import { DestinoViewModel } from '../../model/destino.model';

/**
 * TODO: Description of {@code DestinoComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-destino',
    templateUrl: './destino.component.html',
    standalone: false,
    styleUrls: ['./destino.component.css']
})
export class DestinoComponent extends GenericComponent<DestinoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: DestinoViewModel) {
        super(entityInstance);
    }

}
