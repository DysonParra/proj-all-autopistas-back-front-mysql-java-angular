/*
 * @overview        {PerifericoContainerComponent}
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
import { PerifericoViewModel } from '../../model/periferico.model';
import { PerifericoFacade } from '../../facade/periferico.facade';

/**
 * TODO: Description of {@code PerifericoContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-periferico-container',
    templateUrl: './periferico-container.component.html',
    standalone: false,
    styleUrls: ['./periferico-container.component.css']
})
export class PerifericoContainerComponent extends GenericContainerComponent<PerifericoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: PerifericoViewModel,
        entityFacade: PerifericoFacade) {
        super(entityInstance, entityFacade);
    }

}
