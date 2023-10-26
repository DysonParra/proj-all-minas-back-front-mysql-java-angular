/*
 * @fileoverview    {Configuracion}
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
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Definición de {@code Configuracion}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"Configuracion\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Configuracion implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intId;
    @Column(length = 50)
    private String strTipo;
    @Column(length = 500)
    private String strIndicador;
    @Column(length = 50)
    private String strBaudios;
    @Column(length = 50)
    private String strBitsDatos;
    @Column(length = 50)
    private String strBitsParada;
    @Column(length = 50)
    private String strParidad;
    @Column(length = 50)
    private String strIp;
    @Column(length = 50)
    private String strPuerto;
    @Column(length = 50)
    private String strUsuario;
    @Column(length = 50)
    private String strContrasena;
    private Boolean bitEstado;

}
