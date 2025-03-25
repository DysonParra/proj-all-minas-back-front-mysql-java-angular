/*
 * @fileoverview    {GeneradorPartidaComponent}
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
import { GeneradorPartidaViewModel } from '../../model/generador-partida.model';

/**
 * TODO: Description of {@code GeneradorPartidaComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-generador-partida',
    templateUrl: './generador-partida.component.html',
    standalone: false,
    styleUrls: ['./generador-partida.component.css']
})
export class GeneradorPartidaComponent extends GenericComponent<GeneradorPartidaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: GeneradorPartidaViewModel) {
        super(entityInstance);
    }

}
