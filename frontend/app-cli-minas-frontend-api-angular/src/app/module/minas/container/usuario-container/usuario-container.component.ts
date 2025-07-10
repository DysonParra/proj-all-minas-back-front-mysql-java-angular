/*
 * @overview        {UsuarioContainerComponent}
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
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { UsuarioViewModel } from '../../model/usuario.model';
import { UsuarioFacade } from '../../facade/usuario.facade';

/**
 * TODO: Description of {@code UsuarioContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-usuario-container',
    templateUrl: './usuario-container.component.html',
    standalone: false,
    styleUrls: ['./usuario-container.component.css']
})
export class UsuarioContainerComponent extends GenericContainerComponent<UsuarioViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: UsuarioViewModel,
        entityFacade: UsuarioFacade) {
        super(entityInstance, entityFacade);
    }

}
