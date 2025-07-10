/*
 * @overview        {CategoriaFacade}
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
import { Injectable } from '@angular/core';
import { GenericFacade } from '@app/module/essential/facade/generic.facade';
import { CategoriaViewModel } from '../model/categoria.model';
import { CategoriaState } from '../state/categoria.state';
import { CategoriaService } from '../service/categoria.service';

/**
 * TODO: Description of {@code CategoriaFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class CategoriaFacade extends GenericFacade<CategoriaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: CategoriaService,
        entityState: CategoriaState) {
        super(entityService, entityState);
    }

}
