/*
 * @fileoverview    {TramaComunicacionFacade}
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
import { TramaComunicacionViewModel } from '../model/trama-comunicacion.model';
import { TramaComunicacionState } from '../state/trama-comunicacion.state';
import { TramaComunicacionService } from '../service/trama-comunicacion.service';

/**
 * TODO: Description of {@code TramaComunicacionFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class TramaComunicacionFacade extends GenericFacade<TramaComunicacionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: TramaComunicacionService,
        entityState: TramaComunicacionState) {
        super(entityService, entityState);
    }

}
