/*
 * @overview        {BadgeComponent}
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
import { BadgeViewModel } from '../../model/badge.model';

/**
 * TODO: Description of {@code BadgeComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-badge',
    templateUrl: './badge.component.html',
    standalone: false,
    styleUrls: ['./badge.component.css']
})
export class BadgeComponent extends GenericComponent<BadgeViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: BadgeViewModel) {
        super(entityInstance);
    }

}
