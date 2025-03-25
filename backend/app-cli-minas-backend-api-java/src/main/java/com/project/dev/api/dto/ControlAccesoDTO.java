/*
 * @fileoverview    {ControlAccesoDTO}
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
 * TODO: Description of {@code ControlAccesoDTO}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class ControlAccesoDTO {

    private Integer intIdControl;
    private String strIdDestino;
    private String strPlaca;
    private String strConductor;
    private Date dtFechaIngreso;
    private Date dtFechaSalida;
    private Integer intTopeMensual;
    private Integer intAcumulado;
    private Date dtFechaValidez;
    private String strTipoTarjeta;
    private Integer intIdContrato;
    private String strIdMina;
    private String strCifProveedor;
    private String strRfid;

}
