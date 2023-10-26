/*
 * @fileoverview    {Vehiculo}
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
 * TODO: Definición de {@code Vehiculo}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"Vehiculo\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Vehiculo implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false, length = 100)
    private String strRfid;
    @Basic(optional = false)
    @Column(nullable = false, length = 10)
    private String strPlaca;
    @Column(length = 10)
    private String strTransporte;
    @Temporal(TemporalType.DATE)
    private Date dtRevisionTecnomecanica;
    @Column(length = 50)
    private String strSeguro;
    @Basic(optional = false)
    @Column(nullable = false)
    private int intTara;
    @Basic(optional = false)
    @Column(nullable = false)
    private int intCapacidad;
    @Column(length = 300)
    private String strCategoria;
    @Column(length = 50)
    private String strIdMina;
    @Column(length = 50)
    private String strPatio;
    @Column(length = 100)
    private String strTope;
    @JoinColumn(name = "strIdConductor", referencedColumnName = "strIdentificacion")
    private String strIdConductor;
    @JoinColumn(name = "strCif", referencedColumnName = "strCif")
    private String strCif;

}
