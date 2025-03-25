/*
 * @fileoverview    {RegistroVehiculoContainerComponent}
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
import { RegistroVehiculoViewModel } from '../../model/registro-vehiculo.model';
import { RegistroVehiculoFacade } from '../../facade/registro-vehiculo.facade';

/**
 * TODO: Description of {@code RegistroVehiculoContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-registro-vehiculo-container',
    templateUrl: './registro-vehiculo-container.component.html',
    standalone: false,
    styleUrls: ['./registro-vehiculo-container.component.css']
})
export class RegistroVehiculoContainerComponent extends GenericContainerComponent<RegistroVehiculoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: RegistroVehiculoViewModel,
        entityFacade: RegistroVehiculoFacade) {
        super(entityInstance, entityFacade);
    }

}
