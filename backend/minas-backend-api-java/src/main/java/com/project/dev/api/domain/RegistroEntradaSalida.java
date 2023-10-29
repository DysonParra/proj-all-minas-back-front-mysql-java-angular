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
 * @since 11
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
    @Column(length = 10)
    private String strTransporte;
    @Column(length = 20)
    private String strTicket;
    @Column(length = 10)
    private String strMatricula;
    @Column(length = 50)
    private String strVagon;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaEntrada;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaSalida;
    @Column(length = 50)
    private String strCombustible;
    @Column(length = 20)
    private String strTipoMovimiento;
    @Column(length = 200)
    private String strNombre;
    @Column(length = 50)
    private String strParvaAnterior;
    @Temporal(TemporalType.DATE)
    private Date dtFechaFinParva;
    @Column(length = 100)
    private String strPatio;
    @Temporal(TemporalType.DATE)
    private Date dtFechaInicioParva;
    @Column(length = 100)
    private String strMuestras;
    @Column(length = 50)
    private String strNroBolsa;
    @Column(length = 10)
    private String strCodigoPartida;
    @Column(length = 50)
    private String strConsecutivoVehiculo;
    private Integer intPesoEntrada;
    private Integer intPesoSalida;
    private Integer intPesoNeto;
    @Column(length = 5)
    private String strUnidad;
    @Column(length = 300)
    private String strDescripcion;
    @Lob
    @Column(length = 2147483647)
    private String txtRutaFotos;
    @Column(length = 100)
    private String strRfid;
    private Boolean bitProcesoManual;
    @Column(length = 100)
    private String strUsuario;
    private Boolean bitVehiculoDevuelto;
    @Column(length = 50)
    private String strCif;
    @Column(length = 50)
    private String strIdDestino;
    @Column(length = 50)
    private String strIdOrigen;
    @Column(length = 50)
    private String strEstado;
    private Integer intIdPorDia;
    @JoinColumn(name = "intIdParque", referencedColumnName = "intIdParque")
    private Integer intIdParque;

}
