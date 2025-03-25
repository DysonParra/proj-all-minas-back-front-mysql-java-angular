/*
 * @fileoverview    {GeneradorPartidaService}
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
import { GenericService } from '@app/module/essential/service/generic.service';
import { GeneradorPartidaViewModel } from '../model/generador-partida.model';

/**
 * TODO: Description of {@code GeneradorPartidaService}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class GeneradorPartidaService extends GenericService<GeneradorPartidaViewModel> {

    //public apiUrl: string = `${this.apiServer.rules}/api/v1/generador-partida/`;
    public apiUrl: string = `http://127.0.0.1:8080/api/v1/generador-partida`;
    public dtoList: string = `generadorPartidaDTOList`;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: GeneradorPartidaViewModel) {
        super(entityInstance);
    }

}
