/*
 * @fileoverview    {TramaComunicacion}
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
 * TODO: Definición de {@code TramaComunicacion}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"TramaComunicacion\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class TramaComunicacion implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdTrama;
    @Column(length = 50)
    private String strNombreTrama;
    private Integer intPosicionInicial;
    private Integer intTotalDatosPeso;
    @Column(length = 5, columnDefinition = "Character")
    private String crCaracterFin;
    @Column(length = 5, columnDefinition = "Character")
    private String crCaracterInicio;

}
