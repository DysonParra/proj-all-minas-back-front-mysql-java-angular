/*
 * @fileoverview    {BasculaViewModel}
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
 * TODO: Description of {@code BasculaViewModel}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class BasculaViewModel extends GenericViewModel<number> {

    @Id
    @NotNull
    public intIdProveedor: number;
    @NotNull
    public strRfid: string;
    @NotNull
    public intCodigoPartida: number;
    @NotNull
    public intNumeroMuestra: number;
    @NotNull
    public intEstadoPartida: number;
    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaHoraEntrada: string;
    @NotNull
    public fltPesoBruto: number;
    @NotNull
    public fltPesoNeto: number;
    @NotNull
    public strTipoVehiculo: string;
    @NotNull
    public strMssCodigoPartida: string;
    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    public dtMssFechaHoraTomaMuestra: string;

    /**
     * TODO: Description of method {@code newEntity}.
     *
     */
    public newEntity(): BasculaViewModel {
        return new BasculaViewModel();
    }

}
