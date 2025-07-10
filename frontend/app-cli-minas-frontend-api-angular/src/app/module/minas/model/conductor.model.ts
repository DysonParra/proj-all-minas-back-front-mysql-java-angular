/*
 * @overview        {ConductorViewModel}
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
 * TODO: Description of {@code ConductorViewModel}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ConductorViewModel extends GenericViewModel<number> {

    @Id
    @NotNull
    public strIdentificacion: string;
    @NotNull
    public strNombreConductor: string;
    @Temporal(TemporalType.DATE)
    public dtFechaNacimiento: string;
    public strLicenciaConduccion: string;
    @Temporal(TemporalType.DATE)
    public dtFechaVencimiento: string;
    public strObservaciones: string;
    public strTipoSancion: string;
    @Temporal(TemporalType.DATE)
    public dtFechaInicioSancion: string;
    @Temporal(TemporalType.DATE)
    public dtFechaFinalSancion: string;
    public strDiasSancion: string;

    /**
     * TODO: Description of method {@code newEntity}.
     *
     */
    public newEntity(): ConductorViewModel {
        return new ConductorViewModel();
    }

}
