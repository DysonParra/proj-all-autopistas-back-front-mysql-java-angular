/*
 * @fileoverview    {ComparendoContainerComponent}
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
import { ComparendoViewModel } from '../../model/comparendo.model';
import { ComparendoFacade } from '../../facade/comparendo.facade';

/**
 * TODO: Description of {@code ComparendoContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-comparendo-container',
    templateUrl: './comparendo-container.component.html',
    standalone: false,
    styleUrls: ['./comparendo-container.component.css']
})
export class ComparendoContainerComponent extends GenericContainerComponent<ComparendoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ComparendoViewModel,
        entityFacade: ComparendoFacade) {
        super(entityInstance, entityFacade);
    }

}
