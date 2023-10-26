/*
 * @fileoverview    {CierrePartidaDTO}
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
 * TODO: Definición de {@code CierrePartidaDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class CierrePartidaDTO {

    private Integer intConsecutivo;
    private Integer intCodigoPartida;
    private String strCifProveedor;
    private Integer intCodigoVehiculo;
    private String strRfid;
    private Integer intPeso;
    private Date dtFecha;
    private String strEstado;
    private Integer intPesoEstimado;
    private String strTipo;

}
