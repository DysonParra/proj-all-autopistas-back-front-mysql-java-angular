/*
 * @fileoverview    {PoliciaFacade}
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
import { PoliciaViewModel } from '../model/policia.model';
import { PoliciaState } from '../state/policia.state';
import { PoliciaService } from '../service/policia.service';

/**
 * TODO: Description of {@code PoliciaFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class PoliciaFacade extends GenericFacade<PoliciaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: PoliciaService,
        entityState: PoliciaState) {
        super(entityService, entityState);
    }

}
