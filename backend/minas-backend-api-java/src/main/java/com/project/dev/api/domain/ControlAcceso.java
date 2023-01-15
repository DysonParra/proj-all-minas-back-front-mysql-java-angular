/*
 * @fileoverview    {ControlAcceso} se encarga de realizar tareas específicas.
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
 * TODO: Definición de {@code ControlAcceso}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"ControlAcceso\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class ControlAcceso implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intIdControl;
    @Column(length = 50)
    private String strIdDestino;
    @Column(length = 10)
    private String strPlaca;
    @Column(length = 200)
    private String strConductor;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaIngreso;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaSalida;
    private Integer intTopeMensual;
    private Integer intAcumulado;
    @Temporal(TemporalType.DATE)
    private Date dtFechaValidez;
    @Column(length = 100)
    private String strTipoTarjeta;
    @JoinColumn(name = "intIdContrato", referencedColumnName = "intIdContrato")
    private Integer intIdContrato;
    @JoinColumn(name = "strIdMina", referencedColumnName = "strIdMina")
    private String strIdMina;
    @JoinColumn(name = "strCifProveedor", referencedColumnName = "strCif")
    private String strCifProveedor;
    @JoinColumn(name = "strRfid", referencedColumnName = "strRfid")
    private String strRfid;

}
