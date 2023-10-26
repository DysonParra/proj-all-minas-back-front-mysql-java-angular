/*
 * @fileoverview    {Categoria}
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
 * TODO: Definición de {@code Categoria}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"Categoria\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Categoria implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intIdCategoria;
    @Column(length = 50)
    private String strTipoVehiculo;
    @Column(precision = 12, scale = 0)
    private Float fltPesoMaximo;
    @Column(precision = 12, scale = 0)
    private Float fltTolerancia;
    @Column(length = 300)
    private String strDescripcion;
    @Column(precision = 12, scale = 0)
    private Float fltEjeSencillo;
    @Column(precision = 12, scale = 0)
    private Float fltEjeTandem;
    @Column(precision = 12, scale = 0)
    private Float fltEjeTridem;
    private Integer intTotalEjes;

}
