/*
 * @overview        {UsuarioFacade}
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
import { UsuarioViewModel } from '../model/usuario.model';
import { UsuarioState } from '../state/usuario.state';
import { UsuarioService } from '../service/usuario.service';

/**
 * TODO: Description of {@code UsuarioFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class UsuarioFacade extends GenericFacade<UsuarioViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: UsuarioService,
        entityState: UsuarioState) {
        super(entityService, entityState);
    }

}
