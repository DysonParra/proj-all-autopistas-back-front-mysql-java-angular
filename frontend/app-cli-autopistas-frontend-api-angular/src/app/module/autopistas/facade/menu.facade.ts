/*
 * @fileoverview    {MenuFacade}
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
import { MenuViewModel } from '../model/menu.model';
import { MenuState } from '../state/menu.state';
import { MenuService } from '../service/menu.service';

/**
 * TODO: Description of {@code MenuFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MenuFacade extends GenericFacade<MenuViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: MenuService,
        entityState: MenuState) {
        super(entityService, entityState);
    }

}
