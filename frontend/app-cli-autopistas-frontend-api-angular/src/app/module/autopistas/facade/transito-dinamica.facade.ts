/*
 * @overview        {TransitoDinamicaFacade}
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
import { TransitoDinamicaViewModel } from '../model/transito-dinamica.model';
import { TransitoDinamicaState } from '../state/transito-dinamica.state';
import { TransitoDinamicaService } from '../service/transito-dinamica.service';

/**
 * TODO: Description of {@code TransitoDinamicaFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class TransitoDinamicaFacade extends GenericFacade<TransitoDinamicaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: TransitoDinamicaService,
        entityState: TransitoDinamicaState) {
        super(entityService, entityState);
    }

}
