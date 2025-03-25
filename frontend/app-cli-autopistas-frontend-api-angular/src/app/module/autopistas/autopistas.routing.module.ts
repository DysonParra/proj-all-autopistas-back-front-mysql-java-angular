/*
 * @fileoverview    {AutopistasRoutingModule}
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
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BadgeViewComponent } from './view/badge-view/badge-view.component';import { CategoriaViewComponent } from './view/categoria-view/categoria-view.component';import { ComparendoViewComponent } from './view/comparendo-view/comparendo-view.component';import { ConductorViewComponent } from './view/conductor-view/conductor-view.component';import { ConfiguracionViewComponent } from './view/configuracion-view/configuracion-view.component';import { MenuViewComponent } from './view/menu-view/menu-view.component';import { MercanciaViewComponent } from './view/mercancia-view/mercancia-view.component';import { PerifericoViewComponent } from './view/periferico-view/periferico-view.component';import { PesajeViewComponent } from './view/pesaje-view/pesaje-view.component';import { PoliciaViewComponent } from './view/policia-view/policia-view.component';import { RegistroVehiculoViewComponent } from './view/registro-vehiculo-view/registro-vehiculo-view.component';import { TramaComunicacionViewComponent } from './view/trama-comunicacion-view/trama-comunicacion-view.component';import { TransitoDinamicaViewComponent } from './view/transito-dinamica-view/transito-dinamica-view.component';import { UsuarioViewComponent } from './view/usuario-view/usuario-view.component';import { VehiculoViewComponent } from './view/vehiculo-view/vehiculo-view.component';import { VehiculoSobrepesoViewComponent } from './view/vehiculo-sobrepeso-view/vehiculo-sobrepeso-view.component';

const routes: Routes = [
    {
        path: 'badge',
        component: BadgeViewComponent
    },    {
        path: 'categoria',
        component: CategoriaViewComponent
    },    {
        path: 'comparendo',
        component: ComparendoViewComponent
    },    {
        path: 'conductor',
        component: ConductorViewComponent
    },    {
        path: 'configuracion',
        component: ConfiguracionViewComponent
    },    {
        path: 'menu',
        component: MenuViewComponent
    },    {
        path: 'mercancia',
        component: MercanciaViewComponent
    },    {
        path: 'periferico',
        component: PerifericoViewComponent
    },    {
        path: 'pesaje',
        component: PesajeViewComponent
    },    {
        path: 'policia',
        component: PoliciaViewComponent
    },    {
        path: 'registro-vehiculo',
        component: RegistroVehiculoViewComponent
    },    {
        path: 'trama-comunicacion',
        component: TramaComunicacionViewComponent
    },    {
        path: 'transito-dinamica',
        component: TransitoDinamicaViewComponent
    },    {
        path: 'usuario',
        component: UsuarioViewComponent
    },    {
        path: 'vehiculo',
        component: VehiculoViewComponent
    },    {
        path: 'vehiculo-sobrepeso',
        component: VehiculoSobrepesoViewComponent
    },
];

/**
 * TODO: Description of {@code AutopistasRoutingModule}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AutopistasRoutingModule { }
