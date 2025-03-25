/*
 * @fileoverview    {MenuContainerComponent}
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
import { Component } from '@angular/core';
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { MenuViewModel } from '../../model/menu.model';
import { MenuFacade } from '../../facade/menu.facade';

/**
 * TODO: Description of {@code MenuContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-menu-container',
    templateUrl: './menu-container.component.html',
    standalone: false,
    styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent extends GenericContainerComponent<MenuViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MenuViewModel,
        entityFacade: MenuFacade) {
        super(entityInstance, entityFacade);
    }

}
