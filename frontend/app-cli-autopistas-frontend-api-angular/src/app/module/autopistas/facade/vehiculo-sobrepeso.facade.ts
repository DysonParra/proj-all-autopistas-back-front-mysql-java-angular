/*
 * @fileoverview    {VehiculoSobrepesoFacade}
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
import { Injectable } from '@angular/core';
import { GenericFacade } from '@app/module/essential/facade/generic.facade';
import { VehiculoSobrepesoViewModel } from '../model/vehiculo-sobrepeso.model';
import { VehiculoSobrepesoState } from '../state/vehiculo-sobrepeso.state';
import { VehiculoSobrepesoService } from '../service/vehiculo-sobrepeso.service';

/**
 * TODO: Description of {@code VehiculoSobrepesoFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class VehiculoSobrepesoFacade extends GenericFacade<VehiculoSobrepesoViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityService: VehiculoSobrepesoService,
        entityState: VehiculoSobrepesoState) {
        super(entityService, entityState);
    }

}
