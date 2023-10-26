/*
 * @fileoverview    {Contrato}
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
 * TODO: Definición de {@code Contrato}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"Contrato\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Contrato implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intIdContrato;
    @Basic(optional = false)
    @Column(nullable = false, length = 30)
    private String strIdParque;
    @Basic(optional = false)
    @Column(nullable = false, length = 200)
    private String strCentroProduccion;
    @Basic(optional = false)
    @Column(nullable = false, length = 200)
    private String strCarburante;
    @Column(length = 200)
    private String strTipoAgrupacion;
    @Basic(optional = false)
    @Column(nullable = false)
    private boolean bitPartidaMaestra;
    @Basic(optional = false)
    @Column(nullable = false)
    private int intTipoExistencia;
    @Column(length = 200)
    private String strDescripcion;

}
