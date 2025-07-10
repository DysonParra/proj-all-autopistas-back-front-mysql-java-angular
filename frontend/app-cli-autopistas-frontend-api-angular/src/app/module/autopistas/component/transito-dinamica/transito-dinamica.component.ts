/*
 * @overview        {TransitoDinamicaComponent}
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
import { TransitoDinamicaViewModel } from '../../model/transito-dinamica.model';

/**
 * TODO: Description of {@code TransitoDinamicaComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-transito-dinamica',
    templateUrl: './transito-dinamica.component.html',
    standalone: false,
    styleUrls: ['./transito-dinamica.component.css']
})
export class TransitoDinamicaComponent extends GenericComponent<TransitoDinamicaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TransitoDinamicaViewModel) {
        super(entityInstance);
    }

}
