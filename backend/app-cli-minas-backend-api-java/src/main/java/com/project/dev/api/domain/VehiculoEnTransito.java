/*
 * @overview        {VehiculoEnTransito}
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
package com.project.dev.api.domain;

import java.io.Serializable;
import java.math.BigInteger;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code VehiculoEnTransito}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"vehiculo_en_transito\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class VehiculoEnTransito implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intIdEntrada;
    private Integer intIdParque;
    private String strTransporte;
    private String strTicket;
    private String strMatricula;
    private String strVagon;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaEntrada;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaSalida;
    private String strCombustible;
    private String strTipoMovimiento;
    private String strNombre;
    private String strParvaAnterior;
    @Temporal(TemporalType.DATE)
    private Date dtFechaFinParva;
    private String strPatio;
    @Temporal(TemporalType.DATE)
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
    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String txtRutaFotos;
    private String strRfid;
    private Boolean bitProcesoManual;
    private String strUsuario;
    private Boolean bitVehiculoDevuelto;
    private String strCif;
    private String strIdDestino;
    private String strIdOrigen;
    private String strEstado;
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intIdPorDia;

}
