/*
 * @fileoverview    {VehiculoEnTransitoViewModel}
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
 * TODO: Description of {@code VehiculoEnTransitoViewModel}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class VehiculoEnTransitoViewModel extends GenericViewModel<number> {

    @Id
    @NotNull
    public intIdEntrada: number;
    public intIdParque: number;
    public strTransporte: string;
    public strTicket: string;
    public strMatricula: string;
    public strVagon: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaEntrada: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaSalida: string;
    public strCombustible: string;
    public strTipoMovimiento: string;
    public strNombre: string;
    public strParvaAnterior: string;
    @Temporal(TemporalType.DATE)
    public dtFechaFinParva: string;
    public strPatio: string;
    @Temporal(TemporalType.DATE)
    public dtFechaInicioParva: string;
    public strMuestras: string;
    public strNroBolsa: string;
    public strCodigoPartida: string;
    public strConsecutivoVehiculo: string;
    public intPesoEntrada: number;
    public intPesoSalida: number;
    public intPesoNeto: number;
    public strUnidad: string;
    public strDescripcion: string;
    public txtRutaFotos: string;
    public strRfid: string;
    public bitProcesoManual: boolean;
    public strUsuario: string;
    public bitVehiculoDevuelto: boolean;
    public strCif: string;
    public strIdDestino: string;
    public strIdOrigen: string;
    public strEstado: string;
    @NotNull
    public intIdPorDia: number;

    /**
     * TODO: Description of method {@code newEntity}.
     *
     */
    public newEntity(): VehiculoEnTransitoViewModel {
        return new VehiculoEnTransitoViewModel();
    }

}
