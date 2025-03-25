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
import java.math.BigInteger;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code Configuracion}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"configuracion\"")
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
