/*
 * @overview        {MercanciaContainerComponent}
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
import { MercanciaViewModel } from '../../model/mercancia.model';
import { MercanciaFacade } from '../../facade/mercancia.facade';

/**
 * TODO: Description of {@code MercanciaContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-mercancia-container',
    templateUrl: './mercancia-container.component.html',
    standalone: false,
    styleUrls: ['./mercancia-container.component.css']
})
export class MercanciaContainerComponent extends GenericContainerComponent<MercanciaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MercanciaViewModel,
        entityFacade: MercanciaFacade) {
        super(entityInstance, entityFacade);
    }

}
