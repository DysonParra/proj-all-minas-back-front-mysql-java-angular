/*
 * @fileoverview    {VehiculoEnTransitoState}
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
import { GenericState } from '@app/module/essential/state/generic.state';
import { VehiculoEnTransitoViewModel } from '../model/vehiculo-en-transito.model';

/**
 * TODO: Description of {@code VehiculoEnTransitoState}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class VehiculoEnTransitoState extends GenericState<VehiculoEnTransitoViewModel> {

}
