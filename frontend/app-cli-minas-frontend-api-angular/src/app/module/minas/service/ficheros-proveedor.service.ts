/*
 * @fileoverview    {FicherosProveedorService}
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
import { FicherosProveedorViewModel } from '../model/ficheros-proveedor.model';

/**
 * TODO: Description of {@code FicherosProveedorService}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class FicherosProveedorService extends GenericService<FicherosProveedorViewModel> {

    //public apiUrl: string = `${this.apiServer.rules}/api/v1/ficheros-proveedor/`;
    public apiUrl: string = `http://127.0.0.1:8080/api/v1/ficheros-proveedor`;
    public dtoList: string = `ficherosProveedorDTOList`;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: FicherosProveedorViewModel) {
        super(entityInstance);
    }

}
