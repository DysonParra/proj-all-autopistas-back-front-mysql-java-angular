/*
 * @fileoverview    {RegistroVehiculoComponent}
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
import { RegistroVehiculoViewModel } from '../../model/registro-vehiculo.model';

/**
 * TODO: Description of {@code RegistroVehiculoComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-registro-vehiculo',
    templateUrl: './registro-vehiculo.component.html',
    standalone: false,
    styleUrls: ['./registro-vehiculo.component.css']
})
export class RegistroVehiculoComponent extends GenericComponent<RegistroVehiculoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: RegistroVehiculoViewModel) {
        super(entityInstance);
    }

}
