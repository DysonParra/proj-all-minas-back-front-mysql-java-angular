/*
 * @overview        {CierrePartidaComponent}
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
import { CierrePartidaViewModel } from '../../model/cierre-partida.model';

/**
 * TODO: Description of {@code CierrePartidaComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-cierre-partida',
    templateUrl: './cierre-partida.component.html',
    standalone: false,
    styleUrls: ['./cierre-partida.component.css']
})
export class CierrePartidaComponent extends GenericComponent<CierrePartidaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: CierrePartidaViewModel) {
        super(entityInstance);
    }

}
