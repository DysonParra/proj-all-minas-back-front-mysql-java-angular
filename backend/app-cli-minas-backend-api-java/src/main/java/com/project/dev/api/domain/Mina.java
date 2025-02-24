/*
 * @fileoverview    {Mina}
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
 * TODO: Description of {@code Mina}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"Mina\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Mina implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false, length = 50)
    private String strIdMina;
    @Column(length = 200)
    private String strNombre;
    @Column(length = 100)
    private String strLocalidad;
    @Column(length = 30)
    private String strTelefono;
    @Column(length = 200)
    private String strObservaciones;
    @Column(length = 100)
    private String strProducto;
    @Column(length = 50)
    private String strTicket;
    @JoinColumn(name = "strIdTituloMinero", referencedColumnName = "strIdTitulo", nullable = false)
    private String strIdTituloMinero;

}
