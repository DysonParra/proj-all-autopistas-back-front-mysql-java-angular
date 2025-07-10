/*
 * @overview        {ComparendoFacade}
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
import { ComparendoViewModel } from '../model/comparendo.model';
import { ComparendoState } from '../state/comparendo.state';
import { ComparendoService } from '../service/comparendo.service';

/**
 * TODO: Description of {@code ComparendoFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ComparendoFacade extends GenericFacade<ComparendoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: ComparendoService,
        entityState: ComparendoState) {
        super(entityService, entityState);
    }

}
