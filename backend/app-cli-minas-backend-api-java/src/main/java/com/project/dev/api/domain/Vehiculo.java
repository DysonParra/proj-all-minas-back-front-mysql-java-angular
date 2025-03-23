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
 * TODO: Description of {@code Vehiculo}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
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
    @Column(nullable = false)
    private String strRfid;
    @Basic(optional = false)
    @Column(nullable = false)
    private String strPlaca;
    private String strTransporte;
    @Temporal(TemporalType.DATE)
    private Date dtRevisionTecnomecanica;
    private String strSeguro;
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intTara;
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intCapacidad;
    private String strCategoria;
    private String strIdMina;
    private String strPatio;
    private String strTope;
    @JoinColumn(name = "strIdConductor", referencedColumnName = "strIdentificacion")
    private String strIdConductor;
    @JoinColumn(name = "strCif", referencedColumnName = "strCif")
    private String strCif;

}
