/*
 * @fileoverview    {VehiculoSobrepesoComponent}
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
import { VehiculoSobrepesoViewModel } from '../../model/vehiculo-sobrepeso.model';

/**
 * TODO: Description of {@code VehiculoSobrepesoComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-vehiculo-sobrepeso',
    templateUrl: './vehiculo-sobrepeso.component.html',
    standalone: false,
    styleUrls: ['./vehiculo-sobrepeso.component.css']
})
export class VehiculoSobrepesoComponent extends GenericComponent<VehiculoSobrepesoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: VehiculoSobrepesoViewModel) {
        super(entityInstance);
    }

}
