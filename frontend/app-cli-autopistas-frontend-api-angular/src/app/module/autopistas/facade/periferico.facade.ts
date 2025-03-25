/*
 * @fileoverview    {PerifericoFacade}
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
import { PerifericoViewModel } from '../model/periferico.model';
import { PerifericoState } from '../state/periferico.state';
import { PerifericoService } from '../service/periferico.service';

/**
 * TODO: Description of {@code PerifericoFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class PerifericoFacade extends GenericFacade<PerifericoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: PerifericoService,
        entityState: PerifericoState) {
        super(entityService, entityState);
    }

}
