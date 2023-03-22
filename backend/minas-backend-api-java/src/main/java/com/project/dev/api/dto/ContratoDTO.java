/*
 * @fileoverview    {ContratoDTO}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementación realizada.
 * @version 2.0     Documentación agregada.
 */
package com.project.dev.api.dto;

import java.math.BigDecimal;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Definición de {@code ContratoDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class ContratoDTO {

    private Integer intIdContrato;
    private String strIdParque;
    private String strCentroProduccion;
    private String strCarburante;
    private String strTipoAgrupacion;
    private boolean bitPartidaMaestra;
    private int intTipoExistencia;
    private String strDescripcion;

}
