/*
 * @fileoverview    {Comparendo}
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
 * TODO: Definición de {@code Comparendo}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"Comparendo\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Comparendo implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdComparendo;
    private Integer intCodigoComparendo;
    @Column(length = 200)
    private String strObservaciones;
    private Character enmTipoInfractor;
    @JoinColumn(name = "intCedulaConductor", referencedColumnName = "intCedulaConductor")
    private Long intCedulaConductor;
    @JoinColumn(name = "intIdPolicia", referencedColumnName = "intIdPolicia")
    private Long intIdPolicia;
    @JoinColumn(name = "strPlacaVehiculo", referencedColumnName = "strPlacaVehiculo")
    private String strPlacaVehiculo;
    @JoinColumn(name = "intTiqueteNro", referencedColumnName = "intTiqueteNro")
    private Long intTiqueteNro;

}
