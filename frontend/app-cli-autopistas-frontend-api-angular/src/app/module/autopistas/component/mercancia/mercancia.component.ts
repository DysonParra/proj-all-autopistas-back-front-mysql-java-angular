/*
 * @fileoverview    {MercanciaComponent}
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
import { MercanciaViewModel } from '../../model/mercancia.model';

/**
 * TODO: Description of {@code MercanciaComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-mercancia',
    templateUrl: './mercancia.component.html',
    standalone: false,
    styleUrls: ['./mercancia.component.css']
})
export class MercanciaComponent extends GenericComponent<MercanciaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MercanciaViewModel) {
        super(entityInstance);
    }

}
