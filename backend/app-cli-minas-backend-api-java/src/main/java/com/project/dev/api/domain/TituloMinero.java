/*
 * @fileoverview    {TituloMinero}
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
 * TODO: Description of {@code TituloMinero}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"TituloMinero\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class TituloMinero implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false, length = 50)
    private String strIdTitulo;
    @Basic(optional = false)
    @Column(nullable = false, length = 200)
    private String strNombre;
    @Column(length = 100)
    private String strLocalidad;
    @Column(length = 50)
    private String strTelefono;
    @Column(length = 200)
    private String strObservaciones;
    @JoinColumn(name = "strCifProveedor", referencedColumnName = "strCif", nullable = false)
    private String strCifProveedor;

}
