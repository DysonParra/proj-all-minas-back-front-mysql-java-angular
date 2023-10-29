/*
 * @fileoverview    {VehiculoDTO}
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
 * TODO: Definición de {@code VehiculoDTO}.
 *
 * @author Dyson Parra
 * @since 11
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class VehiculoDTO {

    private String strRfid;
    private String strPlaca;
    private String strTransporte;
    private Date dtRevisionTecnomecanica;
    private String strSeguro;
    private int intTara;
    private int intCapacidad;
    private String strCategoria;
    private String strIdMina;
    private String strPatio;
    private String strTope;
    private String strIdConductor;
    private String strCif;

}
