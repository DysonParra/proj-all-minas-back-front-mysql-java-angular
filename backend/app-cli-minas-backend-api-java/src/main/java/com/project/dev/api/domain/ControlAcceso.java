/*
 * @overview        {ControlAcceso}
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
 * TODO: Description of {@code ControlAcceso}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"control_acceso\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class ControlAcceso implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intIdControl;
    private Integer intIdContrato;
    private String strIdMina;
    private String strIdDestino;
    private String strRfid;
    private String strPlaca;
    private String strConductor;
    private String strCifProveedor;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaIngreso;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaSalida;
    private Integer intTopeMensual;
    private Integer intAcumulado;
    @Temporal(TemporalType.DATE)
    private Date dtFechaValidez;
    private String strTipoTarjeta;

}
