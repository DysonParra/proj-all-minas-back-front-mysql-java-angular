/*
 * @fileoverview    {RegistroEntradaSalidaDTO}
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
 * TODO: Definición de {@code RegistroEntradaSalidaDTO}.
 *
 * @author Dyson Parra
 * @since 11
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class RegistroEntradaSalidaDTO {

    private Integer intIdEntrada;
    private String strTransporte;
    private String strTicket;
    private String strMatricula;
    private String strVagon;
    private Date dtFechaEntrada;
    private Date dtFechaSalida;
    private String strCombustible;
    private String strTipoMovimiento;
    private String strNombre;
    private String strParvaAnterior;
    private Date dtFechaFinParva;
    private String strPatio;
    private Date dtFechaInicioParva;
    private String strMuestras;
    private String strNroBolsa;
    private String strCodigoPartida;
    private String strConsecutivoVehiculo;
    private Integer intPesoEntrada;
    private Integer intPesoSalida;
    private Integer intPesoNeto;
    private String strUnidad;
    private String strDescripcion;
    private String txtRutaFotos;
    private String strRfid;
    private Boolean bitProcesoManual;
    private String strUsuario;
    private Boolean bitVehiculoDevuelto;
    private String strCif;
    private String strIdDestino;
    private String strIdOrigen;
    private String strEstado;
    private Integer intIdPorDia;
    private Integer intIdParque;

}
