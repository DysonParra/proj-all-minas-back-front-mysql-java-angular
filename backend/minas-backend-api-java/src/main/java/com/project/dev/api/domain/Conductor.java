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
 * TODO: Definición de {@code Conductor}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"Conductor\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Conductor implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false, length = 30)
    private String strIdentificacion;
    @Basic(optional = false)
    @Column(nullable = false, length = 200)
    private String strNombreConductor;
    @Temporal(TemporalType.DATE)
    private Date dtFechaNacimiento;
    @Column(length = 50)
    private String strLicenciaConduccion;
    @Temporal(TemporalType.DATE)
    private Date dtFechaVencimiento;
    @Column(length = 200)
    private String strObservaciones;
    @Column(length = 100)
    private String strTipoSancion;
    @Temporal(TemporalType.DATE)
    private Date dtFechaInicioSancion;
    @Temporal(TemporalType.DATE)
    private Date dtFechaFinalSancion;
    @Column(length = 20)
    private String strDiasSancion;

}
