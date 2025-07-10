/*
 * @overview        {MenuComponent}
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
import { GenericComponent } from '@app/module/essential/component/generic.component';
import { MenuViewModel } from '../../model/menu.model';

/**
 * TODO: Description of {@code MenuComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    standalone: false,
    styleUrls: ['./menu.component.css']
})
export class MenuComponent extends GenericComponent<MenuViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MenuViewModel) {
        super(entityInstance);
    }

}
