/*
 * @fileoverview    {CategoriaDTO}
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

import java.math.BigInteger;
import java.math.BigDecimal;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code CategoriaDTO}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class CategoriaDTO {

    private Integer intIdCategoria;
    private String strTipoVehiculo;
    private Float fltPesoMaximo;
    private Float fltTolerancia;
    private String strDescripcion;
    private Float fltEjeSencillo;
    private Float fltEjeTandem;
    private Float fltEjeTridem;
    private Integer intTotalEjes;

}
