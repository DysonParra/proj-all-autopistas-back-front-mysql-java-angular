/*
 * @fileoverview    {PoliciaContainerComponent}
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
import { PoliciaViewModel } from '../../model/policia.model';
import { PoliciaFacade } from '../../facade/policia.facade';

/**
 * TODO: Description of {@code PoliciaContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-policia-container',
    templateUrl: './policia-container.component.html',
    standalone: false,
    styleUrls: ['./policia-container.component.css']
})
export class PoliciaContainerComponent extends GenericContainerComponent<PoliciaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: PoliciaViewModel,
        entityFacade: PoliciaFacade) {
        super(entityInstance, entityFacade);
    }

}
