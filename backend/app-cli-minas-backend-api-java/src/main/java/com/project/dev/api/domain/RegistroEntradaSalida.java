/*
 * @fileoverview    {RegistroEntradaSalida}
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
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import javax.persistence.Temporal;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code RegistroEntradaSalida}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"RegistroEntradaSalida\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class RegistroEntradaSalida implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intIdEntrada;
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
    @JoinColumn(name = "intIdParque", referencedColumnName = "intIdParque")
    private Integer intIdParque;

}
