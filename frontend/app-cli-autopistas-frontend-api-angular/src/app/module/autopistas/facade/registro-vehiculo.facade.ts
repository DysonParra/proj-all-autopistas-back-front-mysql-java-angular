/*
 * @fileoverview    {RegistroVehiculoFacade}
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
import { GenericFacade } from '@app/module/essential/facade/generic.facade';
import { RegistroVehiculoViewModel } from '../model/registro-vehiculo.model';
import { RegistroVehiculoState } from '../state/registro-vehiculo.state';
import { RegistroVehiculoService } from '../service/registro-vehiculo.service';

/**
 * TODO: Description of {@code RegistroVehiculoFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class RegistroVehiculoFacade extends GenericFacade<RegistroVehiculoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: RegistroVehiculoService,
        entityState: RegistroVehiculoState) {
        super(entityService, entityState);
    }

}
