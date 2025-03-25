/*
 * @fileoverview    {PoliciaService}
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
import { GenericService } from '@app/module/essential/service/generic.service';
import { PoliciaViewModel } from '../model/policia.model';

/**
 * TODO: Description of {@code PoliciaService}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class PoliciaService extends GenericService<PoliciaViewModel> {

    //public apiUrl: string = `${this.apiServer.rules}/api/v1/policia/`;
    public apiUrl: string = `http://127.0.0.1:8080/api/v1/policia`;
    public dtoList: string = `policiaDTOList`;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: PoliciaViewModel) {
        super(entityInstance);
    }

}
