/*
 * @fileoverview    {ConfiguracionDTO} se encarga de realizar tareas específicas.
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
 * TODO: Definición de {@code ConfiguracionDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class ConfiguracionDTO {

    private Integer intId;
    private String strTipo;
    private String strIndicador;
    private String strBaudios;
    private String strBitsDatos;
    private String strBitsParada;
    private String strParidad;
    private String strIp;
    private String strPuerto;
    private String strUsuario;
    private String strContrasena;
    private Boolean bitEstado;

}
