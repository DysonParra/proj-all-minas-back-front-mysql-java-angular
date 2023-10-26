/*
 * @fileoverview    {Muestra}
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
 * TODO: Definición de {@code Muestra}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"Muestra\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Muestra implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intIdMuestra;
    @Column(length = 10)
    private String strPartida;
    @Column(length = 10)
    private String strCamion;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaHora;
    @Column(length = 300)
    private String strObservaciones;
    @JoinColumn(name = "strRfid", referencedColumnName = "strRfid")
    private String strRfid;

}
