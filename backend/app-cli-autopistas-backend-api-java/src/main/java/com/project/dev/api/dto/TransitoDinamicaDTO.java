/*
 * @overview        {TransitoDinamicaDTO}
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
package com.project.dev.api.dto;

import java.math.BigInteger;
import java.math.BigDecimal;
import java.util.Date;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code TransitoDinamicaDTO}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class TransitoDinamicaDTO {

    private Long intIdDinamica;
    private Integer intIdCategoria;
    private String strPlacaVehiculo;
    private Date dtFechaHoraTransito;
    private Integer intPesoGeneral;
    private String strPesoEjes;
    private Float fltVelocidad;
    private String txtBase64Placa;

}
