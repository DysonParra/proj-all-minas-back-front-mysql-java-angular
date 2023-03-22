/*
 * @fileoverview    {Sancion}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementación realizada.
 * @version 2.0     Documentación agregada.
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
 * TODO: Definición de {@code Sancion}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"Sancion\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Sancion implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Integer intNumero;
    @Column(length = 200)
    private String strItem;
    private Boolean bitSancionConductor;
    private Boolean bitSancionVehiculo;
    @Column(length = 200)
    private String strTiempo;

}
