/*
 * @overview        {UsuarioComponent}
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
import { UsuarioViewModel } from '../../model/usuario.model';

/**
 * TODO: Description of {@code UsuarioComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    standalone: false,
    styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent extends GenericComponent<UsuarioViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: UsuarioViewModel) {
        super(entityInstance);
    }

}
