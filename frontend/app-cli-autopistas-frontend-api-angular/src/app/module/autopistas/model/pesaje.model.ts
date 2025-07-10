/*
 * @overview        {PesajeViewModel}
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
import { Injectable } from "@angular/core";
import { GenericViewModel } from "@app/module/essential/model/generic.model";
import { Id } from "@app/module/essential/decorator/id.decorator";
import { NotNull } from "@app/module/essential/decorator/not-null.decorator";
import { Hidden } from "@app/module/essential/decorator/hidden.decorator";
import { Temporal } from "@app/module/essential/decorator/temporal.decorator";
import { TemporalType } from "@app/module/essential/model/temporal-type.model";

/**
 * TODO: Description of {@code PesajeViewModel}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class PesajeViewModel extends GenericViewModel<number> {

    @Id
    @NotNull
    public intId: number;
    public intTiqueteNumero: number;
    public strPlaca: string;
    public strCodigo: string;
    public intNumeroInterno: number;
    public strTipoVehiculo: string;
    public strConductor: string;
    public strCedula: string;
    public strProducto: string;
    public strPlanta: string;
    public strCliente: string;
    public strTransportadora: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaHoraPesoVacio: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaHoraPesoLleno: string;
    public strCiv: string;
    public strDireccion: string;
    public strEntregadoPor: string;
    public strRecibidoPor: string;
    public strShipment: string;
    public strSello: string;
    public strR: string;
    public strContenedor: string;
    public strObservacion: string;
    public enmTipoIngreso: string;

    /**
     * TODO: Description of method {@code newEntity}.
     *
     */
    public newEntity(): PesajeViewModel {
        return new PesajeViewModel();
    }

}
