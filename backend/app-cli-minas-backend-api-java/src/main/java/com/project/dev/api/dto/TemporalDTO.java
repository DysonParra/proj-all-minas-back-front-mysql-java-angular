/*
 * @fileoverview    {TemporalDTO}
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
 * TODO: Description of {@code TemporalDTO}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class TemporalDTO {

    private Integer intIdTemporal;
    private String strPlaca;
    private String strRfid;
    private String strProveedor;
    private String strTope;
    private Integer intAcumulado;
    private Date dtFechaEntrada;
    private Date dtFechaSalida;
    private String strEstado;

}
