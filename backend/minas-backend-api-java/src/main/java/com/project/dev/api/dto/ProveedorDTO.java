/*
 * @fileoverview    {ProveedorDTO}
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
package com.project.dev.api.dto;

import java.math.BigDecimal;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Definición de {@code ProveedorDTO}.
 *
 * @author Dyson Parra
 * @since 11
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class ProveedorDTO {

    private String strCif;
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
