/*
 * @fileoverview    {ComparendoComponent}
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
import { ComparendoViewModel } from '../../model/comparendo.model';

/**
 * TODO: Description of {@code ComparendoComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-comparendo',
    templateUrl: './comparendo.component.html',
    standalone: false,
    styleUrls: ['./comparendo.component.css']
})
export class ComparendoComponent extends GenericComponent<ComparendoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: ComparendoViewModel) {
        super(entityInstance);
    }

}
