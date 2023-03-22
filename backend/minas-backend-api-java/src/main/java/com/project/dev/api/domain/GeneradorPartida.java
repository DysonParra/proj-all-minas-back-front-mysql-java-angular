/*
 * @fileoverview    {GeneradorPartida}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementación realizada.
 * @version 2.0     Documentación agregada.
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
 * TODO: Definición de {@code GeneradorPartida}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"GeneradorPartida\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class GeneradorPartida implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intConsecutivo;
    private Integer intCodigoPartida;
    private Integer intCodigoVehiculo;
    private Integer intPeso;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @Column(length = 50)
    private String strEstado;
    private Integer intPesoEstimado;
    @Column(length = 50)
    private String strTipo;
    @JoinColumn(name = "strCifProveedor", referencedColumnName = "strCif")
    private String strCifProveedor;
    @JoinColumn(name = "strRfid", referencedColumnName = "strRfid")
    private String strRfid;

}
