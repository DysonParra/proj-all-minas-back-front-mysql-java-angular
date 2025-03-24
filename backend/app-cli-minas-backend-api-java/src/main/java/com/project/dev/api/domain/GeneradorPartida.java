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
 * TODO: Description of {@code GeneradorPartida}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"generador_partida\"")
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
    private String strEstado;
    private Integer intPesoEstimado;
    private String strTipo;
    private String strCifProveedor;
    private String strRfid;

}
