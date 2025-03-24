/*
 * @fileoverview    {Conductor}
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
package com.project.dev.api.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import javax.persistence.Temporal;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code Conductor}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"conductor\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Conductor implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private String strIdentificacion;
    @Basic(optional = false)
    @Column(nullable = false)
    private String strNombreConductor;
    @Temporal(TemporalType.DATE)
    private Date dtFechaNacimiento;
    private String strLicenciaConduccion;
    @Temporal(TemporalType.DATE)
    private Date dtFechaVencimiento;
    private String strObservaciones;
    private String strTipoSancion;
    @Temporal(TemporalType.DATE)
    private Date dtFechaInicioSancion;
    @Temporal(TemporalType.DATE)
    private Date dtFechaFinalSancion;
    private String strDiasSancion;

}
