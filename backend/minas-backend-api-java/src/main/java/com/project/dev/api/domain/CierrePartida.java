/*
 * @fileoverview    {CierrePartida}
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
 * TODO: Definición de {@code CierrePartida}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"CierrePartida\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class CierrePartida implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intConsecutivo;
    private Integer intCodigoPartida;
    @Column(length = 50)
    private String strCifProveedor;
    private Integer intCodigoVehiculo;
    @Column(length = 100)
    private String strRfid;
    private Integer intPeso;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @Column(length = 50)
    private String strEstado;
    private Integer intPesoEstimado;
    @Column(length = 50)
    private String strTipo;

}
