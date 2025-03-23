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
 * TODO: Description of {@code Contrato}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
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
    @Column(nullable = false)
    private String strIdParque;
    @Basic(optional = false)
    @Column(nullable = false)
    private String strCentroProduccion;
    @Basic(optional = false)
    @Column(nullable = false)
    private String strCarburante;
    private String strTipoAgrupacion;
    @Basic(optional = false)
    @Column(nullable = false)
    private Boolean bitPartidaMaestra;
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intTipoExistencia;
    private String strDescripcion;

}
