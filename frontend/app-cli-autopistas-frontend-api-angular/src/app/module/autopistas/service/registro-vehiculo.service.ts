/*
 * @fileoverview    {RegistroVehiculoService}
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
import { Injectable } from '@angular/core';
import { GenericService } from '@app/module/essential/service/generic.service';
import { RegistroVehiculoViewModel } from '../model/registro-vehiculo.model';

/**
 * TODO: Description of {@code RegistroVehiculoService}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class RegistroVehiculoService extends GenericService<RegistroVehiculoViewModel> {

    //public apiUrl: string = `${this.apiServer.rules}/api/v1/registro-vehiculo/`;
    public apiUrl: string = `http://127.0.0.1:8080/api/v1/registro-vehiculo`;
    public dtoList: string = `registroVehiculoDTOList`;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: RegistroVehiculoViewModel) {
        super(entityInstance);
    }

}
