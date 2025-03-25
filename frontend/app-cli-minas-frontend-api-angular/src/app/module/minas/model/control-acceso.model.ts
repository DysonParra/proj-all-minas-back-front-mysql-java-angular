/*
 * @fileoverview    {ControlAccesoViewModel}
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
import { Injectable } from "@angular/core";
import { GenericViewModel } from "@app/module/essential/model/generic.model";
import { Id } from "@app/module/essential/decorator/id.decorator";
import { NotNull } from "@app/module/essential/decorator/not-null.decorator";
import { Hidden } from "@app/module/essential/decorator/hidden.decorator";
import { Temporal } from "@app/module/essential/decorator/temporal.decorator";
import { TemporalType } from "@app/module/essential/model/temporal-type.model";

/**
 * TODO: Description of {@code ControlAccesoViewModel}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ControlAccesoViewModel extends GenericViewModel<number> {

    @Id
    @NotNull
    public intIdControl: number;
    public intIdContrato: number;
    public strIdMina: string;
    public strIdDestino: string;
    public strRfid: string;
    public strPlaca: string;
    public strConductor: string;
    public strCifProveedor: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaIngreso: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaSalida: string;
    public intTopeMensual: number;
    public intAcumulado: number;
    @Temporal(TemporalType.DATE)
    public dtFechaValidez: string;
    public strTipoTarjeta: string;

    /**
     * TODO: Description of method {@code newEntity}.
     *
     */
    public newEntity(): ControlAccesoViewModel {
        return new ControlAccesoViewModel();
    }

}
