/*
 * @overview        {BadgeFacade}
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
import { BadgeViewModel } from '../model/badge.model';
import { BadgeState } from '../state/badge.state';
import { BadgeService } from '../service/badge.service';

/**
 * TODO: Description of {@code BadgeFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class BadgeFacade extends GenericFacade<BadgeViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: BadgeService,
        entityState: BadgeState) {
        super(entityService, entityState);
    }

}
