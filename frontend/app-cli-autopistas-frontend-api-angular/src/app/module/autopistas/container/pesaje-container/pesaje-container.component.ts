/*
 * @overview        {PesajeContainerComponent}
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
import { PesajeViewModel } from '../../model/pesaje.model';
import { PesajeFacade } from '../../facade/pesaje.facade';

/**
 * TODO: Description of {@code PesajeContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-pesaje-container',
    templateUrl: './pesaje-container.component.html',
    standalone: false,
    styleUrls: ['./pesaje-container.component.css']
})
export class PesajeContainerComponent extends GenericContainerComponent<PesajeViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: PesajeViewModel,
        entityFacade: PesajeFacade) {
        super(entityInstance, entityFacade);
    }

}
