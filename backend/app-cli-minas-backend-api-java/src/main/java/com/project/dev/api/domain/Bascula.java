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
import java.math.BigInteger;
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
@Table(name = "\"bascula\"")
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
    @Column(nullable = false)
    private String strRfid;
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intCodigoPartida;
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intNumeroMuestra;
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intEstadoPartida;
    @Basic(optional = false)
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaHoraEntrada;
    @Basic(optional = false)
    @Column(nullable = false)
    private Float fltPesoBruto;
    @Basic(optional = false)
    @Column(nullable = false)
    private Float fltPesoNeto;
    @Basic(optional = false)
    @Column(nullable = false)
    private String strTipoVehiculo;
    @Basic(optional = false)
    @Column(nullable = false)
    private String strMssCodigoPartida;
    @Basic(optional = false)
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtMssFechaHoraTomaMuestra;

}
