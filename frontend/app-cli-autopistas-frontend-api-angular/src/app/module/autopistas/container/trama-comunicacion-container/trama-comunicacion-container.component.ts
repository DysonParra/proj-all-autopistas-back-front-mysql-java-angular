/*
 * @overview        {TramaComunicacionContainerComponent}
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
import { TramaComunicacionViewModel } from '../../model/trama-comunicacion.model';
import { TramaComunicacionFacade } from '../../facade/trama-comunicacion.facade';

/**
 * TODO: Description of {@code TramaComunicacionContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-trama-comunicacion-container',
    templateUrl: './trama-comunicacion-container.component.html',
    standalone: false,
    styleUrls: ['./trama-comunicacion-container.component.css']
})
export class TramaComunicacionContainerComponent extends GenericContainerComponent<TramaComunicacionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TramaComunicacionViewModel,
        entityFacade: TramaComunicacionFacade) {
        super(entityInstance, entityFacade);
    }

}
