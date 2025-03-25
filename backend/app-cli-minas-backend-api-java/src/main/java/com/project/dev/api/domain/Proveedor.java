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
import java.math.BigInteger;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code Proveedor}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"proveedor\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Proveedor implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private String strCif;
    @Basic(optional = false)
    @Column(nullable = false)
    private String strNombre;
    private String strDireccion;
    private String strPais;
    private String strPoblacion;
    private String strCodigoProveedor;
    private String strCorreoElectronico;
    private String strPatio;
    private Integer intTopeMensual;
    private Integer intAcumulado;
    private String strObservaciones;
    private Integer intTopeOpcional;
    private Integer intTopeAdicional;
    private Integer intTopeSpot;
    private Integer intTopeOtros;

}
