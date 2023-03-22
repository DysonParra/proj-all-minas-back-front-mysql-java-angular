/*
 * @fileoverview    {UsuarioDTO}
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
 * TODO: Definición de {@code UsuarioDTO}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class UsuarioDTO {

    private Integer intCedula;
    private String strNombre;
    private String strApellido;
    private String strEmail;
    private String strTelefono;
    private String crRh;
    private String strSeudonimo;
    private String strTipo;
    private String strCargo;
    private String txtContrasena;
    private byte[] btFoto;

}
