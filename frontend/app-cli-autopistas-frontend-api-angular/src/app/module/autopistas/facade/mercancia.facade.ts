/*
 * @fileoverview    {MercanciaFacade}
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
import { MercanciaViewModel } from '../model/mercancia.model';
import { MercanciaState } from '../state/mercancia.state';
import { MercanciaService } from '../service/mercancia.service';

/**
 * TODO: Description of {@code MercanciaFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MercanciaFacade extends GenericFacade<MercanciaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: MercanciaService,
        entityState: MercanciaState) {
        super(entityService, entityState);
    }

}
