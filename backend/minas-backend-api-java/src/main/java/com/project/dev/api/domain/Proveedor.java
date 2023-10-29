/*
 * @fileoverview    {Proveedor}
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
 * TODO: Definición de {@code Proveedor}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"Proveedor\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Proveedor implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false, length = 50)
    private String strCif;
    @Basic(optional = false)
    @Column(nullable = false, length = 200)
    private String strNombre;
    @Column(length = 200)
    private String strDireccion;
    @Column(length = 100)
    private String strPais;
    @Column(length = 100)
    private String strPoblacion;
    @Column(length = 50)
    private String strCodigoProveedor;
    @Column(length = 200)
    private String strCorreoElectronico;
    @Column(length = 20)
    private String strPatio;
    private Integer intTopeMensual;
    private Integer intAcumulado;
    @Column(length = 300)
    private String strObservaciones;
    private Integer intTopeOpcional;
    private Integer intTopeAdicional;
    private Integer intTopeSpot;
    private Integer intTopeOtros;

}
