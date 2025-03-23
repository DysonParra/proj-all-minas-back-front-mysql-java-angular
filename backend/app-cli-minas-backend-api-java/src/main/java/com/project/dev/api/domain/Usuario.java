/*
 * @fileoverview    {Usuario}
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
 * TODO: Description of {@code Usuario}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"Usuario\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Usuario implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intCedula;
    @Basic(optional = false)
    @Column(nullable = false)
    private String strNombre;
    @Basic(optional = false)
    @Column(nullable = false)
    private String strApellido;
    private String strEmail;
    private String strTelefono;
    @Column(columnDefinition = "Character")
    private String crRh;
    private String strSeudonimo;
    private String strTipo;
    private String strCargo;
    @Lob
    private String txtContrasena;
    @Lob
    @Column(columnDefinition = "BLOB")
    private Byte[] btFoto;

}
