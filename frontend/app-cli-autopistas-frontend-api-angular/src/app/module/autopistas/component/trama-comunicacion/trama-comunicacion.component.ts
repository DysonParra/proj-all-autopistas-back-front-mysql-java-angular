/*
 * @overview        {TramaComunicacionComponent}
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
import { TramaComunicacionViewModel } from '../../model/trama-comunicacion.model';

/**
 * TODO: Description of {@code TramaComunicacionComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-trama-comunicacion',
    templateUrl: './trama-comunicacion.component.html',
    standalone: false,
    styleUrls: ['./trama-comunicacion.component.css']
})
export class TramaComunicacionComponent extends GenericComponent<TramaComunicacionViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TramaComunicacionViewModel) {
        super(entityInstance);
    }

}
