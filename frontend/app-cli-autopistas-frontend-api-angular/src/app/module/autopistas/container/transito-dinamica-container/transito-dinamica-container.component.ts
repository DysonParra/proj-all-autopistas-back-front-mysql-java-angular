/*
 * @fileoverview    {TransitoDinamicaContainerComponent}
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
import { TransitoDinamicaViewModel } from '../../model/transito-dinamica.model';
import { TransitoDinamicaFacade } from '../../facade/transito-dinamica.facade';

/**
 * TODO: Description of {@code TransitoDinamicaContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-transito-dinamica-container',
    templateUrl: './transito-dinamica-container.component.html',
    standalone: false,
    styleUrls: ['./transito-dinamica-container.component.css']
})
export class TransitoDinamicaContainerComponent extends GenericContainerComponent<TransitoDinamicaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TransitoDinamicaViewModel,
        entityFacade: TransitoDinamicaFacade) {
        super(entityInstance, entityFacade);
    }

}
