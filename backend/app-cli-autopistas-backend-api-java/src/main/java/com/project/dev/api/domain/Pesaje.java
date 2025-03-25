/*
 * @fileoverview    {Pesaje}
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
 * TODO: Description of {@code Pesaje}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"pesaje\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Pesaje implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intId;
    private Long intTiqueteNumero;
    private String strPlaca;
    private String strCodigo;
    private Long intNumeroInterno;
    private String strTipoVehiculo;
    private String strConductor;
    private String strCedula;
    private String strProducto;
    private String strPlanta;
    private String strCliente;
    private String strTransportadora;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaHoraPesoVacio;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaHoraPesoLleno;
    private String strCiv;
    private String strDireccion;
    private String strEntregadoPor;
    private String strRecibidoPor;
    private String strShipment;
    private String strSello;
    private String strR;
    private String strContenedor;
    private String strObservacion;
    @Column(columnDefinition = "enum")
    private String enmTipoIngreso;

}
