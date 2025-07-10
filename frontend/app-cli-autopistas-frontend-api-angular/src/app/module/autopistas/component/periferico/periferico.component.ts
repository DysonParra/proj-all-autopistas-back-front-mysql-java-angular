/*
 * @overview        {PerifericoComponent}
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
import { PerifericoViewModel } from '../../model/periferico.model';

/**
 * TODO: Description of {@code PerifericoComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-periferico',
    templateUrl: './periferico.component.html',
    standalone: false,
    styleUrls: ['./periferico.component.css']
})
export class PerifericoComponent extends GenericComponent<PerifericoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: PerifericoViewModel) {
        super(entityInstance);
    }

}
