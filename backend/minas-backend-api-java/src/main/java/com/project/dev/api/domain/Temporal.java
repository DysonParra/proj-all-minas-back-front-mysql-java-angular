/*
 * @fileoverview    {Temporal}
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
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Definición de {@code Temporal}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"Temporal\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Temporal implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intIdTemporal;
    @Column(length = 10)
    private String strPlaca;
    @Column(length = 50)
    private String strRfid;
    @Column(length = 100)
    private String strProveedor;
    @Column(length = 20)
    private String strTope;
    private Integer intAcumulado;
    private Date dtFechaEntrada;
    private Date dtFechaSalida;
    @Column(length = 500)
    private String strEstado;

}
