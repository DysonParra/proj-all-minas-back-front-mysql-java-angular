/*
 * @fileoverview    {Bascula}
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
 * TODO: Description of {@code Bascula}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"Bascula\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Bascula implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intIdProveedor;
    @Basic(optional = false)
    @Column(nullable = false, length = 50)
    private String strRfid;
    @Basic(optional = false)
    @Column(nullable = false)
    private int intCodigoPartida;
    @Basic(optional = false)
    @Column(nullable = false)
    private int intNumeroMuestra;
    @Basic(optional = false)
    @Column(nullable = false)
    private int intEstadoPartida;
    @Basic(optional = false)
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaHoraEntrada;
    @Basic(optional = false)
    @Column(nullable = false)
    private float fltPesoBruto;
    @Basic(optional = false)
    @Column(nullable = false)
    private float fltPesoNeto;
    @Basic(optional = false)
    @Column(nullable = false, length = 20)
    private String strTipoVehiculo;
    @Basic(optional = false)
    @Column(nullable = false, length = 100)
    private String strMssCodigoPartida;
    @Basic(optional = false)
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtMssFechaHoraTomaMuestra;

}
