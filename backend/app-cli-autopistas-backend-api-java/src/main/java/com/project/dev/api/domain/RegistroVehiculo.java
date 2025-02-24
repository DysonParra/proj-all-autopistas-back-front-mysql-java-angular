/*
 * @fileoverview    {RegistroVehiculo}
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
 * TODO: Description of {@code RegistroVehiculo}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"RegistroVehiculo\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class RegistroVehiculo implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intTiqueteNro;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaHoraEstatica;
    private Long intPesoEstatica;
    private Long intSobrepeso;
    private Boolean bitPesajeAutorizado;
    private Boolean bitComparendo;
    @JoinColumn(name = "intCedulaConductor", referencedColumnName = "intCedulaConductor")
    private Long intCedulaConductor;
    @JoinColumn(name = "intCedulaUsuario", referencedColumnName = "intCedulaUsuario")
    private Long intCedulaUsuario;
    @JoinColumn(name = "intIdCategoria", referencedColumnName = "intIdCategoria")
    private Long intIdCategoria;
    @JoinColumn(name = "intIdMercancia", referencedColumnName = "intIdMercancia")
    private Long intIdMercancia;
    @JoinColumn(name = "intIdRepeso", referencedColumnName = "intIdRepeso")
    private Long intIdRepeso;
    @JoinColumn(name = "strPlacaVehiculo", referencedColumnName = "strPlacaVehiculo")
    private String strPlacaVehiculo;

}
