/*
 * @fileoverview    {Pesaje} se encarga de realizar tareas específicas.
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
 * TODO: Definición de {@code Pesaje}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Entity
@Table(name = "\"Pesaje\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Pesaje implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intId;
    private Long intTiqueteNumero;
    @Column(length = 10)
    private String strPlaca;
    @Column(length = 50)
    private String strCodigo;
    private Long intNumeroInterno;
    @Column(length = 20)
    private String strTipoVehiculo;
    @Column(length = 100)
    private String strConductor;
    @Column(length = 20)
    private String strCedula;
    @Column(length = 100)
    private String strProducto;
    @Column(length = 100)
    private String strPlanta;
    @Column(length = 100)
    private String strCliente;
    @Column(length = 100)
    private String strTransportadora;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaHoraPesoVacio;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaHoraPesoLleno;
    @Column(length = 50)
    private String strCiv;
    @Column(length = 80)
    private String strDireccion;
    @Column(length = 100)
    private String strEntregadoPor;
    @Column(length = 100)
    private String strRecibidoPor;
    @Column(length = 50)
    private String strShipment;
    @Column(length = 50)
    private String strSello;
    @Column(length = 50)
    private String strR;
    @Column(length = 50)
    private String strContenedor;
    @Column(length = 250)
    private String strObservacion;
    @Column(length = 21, columnDefinition = "enum")
    private String enmTipoIngreso;

}
