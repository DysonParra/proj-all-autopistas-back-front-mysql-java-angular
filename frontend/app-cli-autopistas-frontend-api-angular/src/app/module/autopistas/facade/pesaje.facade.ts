/*
 * @overview        {PesajeFacade}
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
import { PesajeViewModel } from '../model/pesaje.model';
import { PesajeState } from '../state/pesaje.state';
import { PesajeService } from '../service/pesaje.service';

/**
 * TODO: Description of {@code PesajeFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class PesajeFacade extends GenericFacade<PesajeViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: PesajeService,
        entityState: PesajeState) {
        super(entityService, entityState);
    }

}
