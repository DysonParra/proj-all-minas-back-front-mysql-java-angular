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
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intId;
    @Column(columnDefinition = "NVARCHAR")
    private String strTipo;
    @Column(columnDefinition = "NVARCHAR")
    private String strIndicador;
    @Column(columnDefinition = "NVARCHAR")
    private String strBaudios;
    @Column(columnDefinition = "NVARCHAR")
    private String strBitsDatos;
    @Column(columnDefinition = "NVARCHAR")
    private String strBitsParada;
    @Column(columnDefinition = "NVARCHAR")
    private String strParidad;
    @Column(columnDefinition = "NVARCHAR")
    private String strIp;
    @Column(columnDefinition = "NVARCHAR")
    private String strPuerto;
    @Column(columnDefinition = "NVARCHAR")
    private String strUsuario;
    @Column(columnDefinition = "NVARCHAR")
    private String strContrasena;
    private Boolean bitEstado;

}
