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
import java.math.BigInteger;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code Temporal}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"temporal\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Temporal implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intIdTemporal;
    private String strPlaca;
    private String strRfid;
    private String strProveedor;
    private String strTope;
    private Integer intAcumulado;
    private Date dtFechaEntrada;
    private Date dtFechaSalida;
    private String strEstado;

}
