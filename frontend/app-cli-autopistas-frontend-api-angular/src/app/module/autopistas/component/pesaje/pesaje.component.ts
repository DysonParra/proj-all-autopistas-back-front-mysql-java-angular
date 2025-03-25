/*
 * @fileoverview    {PesajeComponent}
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
import { PesajeViewModel } from '../../model/pesaje.model';

/**
 * TODO: Description of {@code PesajeComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-pesaje',
    templateUrl: './pesaje.component.html',
    standalone: false,
    styleUrls: ['./pesaje.component.css']
})
export class PesajeComponent extends GenericComponent<PesajeViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: PesajeViewModel) {
        super(entityInstance);
    }

}
