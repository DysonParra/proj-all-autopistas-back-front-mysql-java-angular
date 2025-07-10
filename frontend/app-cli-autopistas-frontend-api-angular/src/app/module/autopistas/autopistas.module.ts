/*
 * @overview        {AutopistasModule}
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
import { CommonModule } from '@angular/common';

import {
    DxBoxModule,
    DxSelectBoxModule,
    DxFormModule,
    DxButtonModule,
    DxDataGridModule,
    DxSchedulerModule,
    DxCalendarModule,
    DxDrawerModule,
    DxListModule,
    DxContextMenuModule,
    DxDateBoxModule,
    DxRadioGroupModule,
    DxPopupModule,
    DxTextBoxModule,
    DxTemplateModule,
    DxHtmlEditorModule,
    DxDropDownBoxModule,
    DxDropDownButtonModule,
    DxToolbarModule,
    DxCheckBoxModule,
    DxValidatorModule,
    DxScrollViewModule,
    DxLoadPanelModule
} from 'devextreme-angular';

import { BadgeFacade } from './facade/badge.facade';
import { BadgeService } from './service/badge.service';
import { BadgeComponent } from './component/badge/badge.component';
import { BadgeContainerComponent } from './container/badge-container/badge-container.component';
import { BadgeViewComponent } from './view/badge-view/badge-view.component';

import { CategoriaFacade } from './facade/categoria.facade';
import { CategoriaService } from './service/categoria.service';
import { CategoriaComponent } from './component/categoria/categoria.component';
import { CategoriaContainerComponent } from './container/categoria-container/categoria-container.component';
import { CategoriaViewComponent } from './view/categoria-view/categoria-view.component';

import { ComparendoFacade } from './facade/comparendo.facade';
import { ComparendoService } from './service/comparendo.service';
import { ComparendoComponent } from './component/comparendo/comparendo.component';
import { ComparendoContainerComponent } from './container/comparendo-container/comparendo-container.component';
import { ComparendoViewComponent } from './view/comparendo-view/comparendo-view.component';

import { ConductorFacade } from './facade/conductor.facade';
import { ConductorService } from './service/conductor.service';
import { ConductorComponent } from './component/conductor/conductor.component';
import { ConductorContainerComponent } from './container/conductor-container/conductor-container.component';
import { ConductorViewComponent } from './view/conductor-view/conductor-view.component';

import { ConfiguracionFacade } from './facade/configuracion.facade';
import { ConfiguracionService } from './service/configuracion.service';
import { ConfiguracionComponent } from './component/configuracion/configuracion.component';
import { ConfiguracionContainerComponent } from './container/configuracion-container/configuracion-container.component';
import { ConfiguracionViewComponent } from './view/configuracion-view/configuracion-view.component';

import { MenuFacade } from './facade/menu.facade';
import { MenuService } from './service/menu.service';
import { MenuComponent } from './component/menu/menu.component';
import { MenuContainerComponent } from './container/menu-container/menu-container.component';
import { MenuViewComponent } from './view/menu-view/menu-view.component';

import { MercanciaFacade } from './facade/mercancia.facade';
import { MercanciaService } from './service/mercancia.service';
import { MercanciaComponent } from './component/mercancia/mercancia.component';
import { MercanciaContainerComponent } from './container/mercancia-container/mercancia-container.component';
import { MercanciaViewComponent } from './view/mercancia-view/mercancia-view.component';

import { PerifericoFacade } from './facade/periferico.facade';
import { PerifericoService } from './service/periferico.service';
import { PerifericoComponent } from './component/periferico/periferico.component';
import { PerifericoContainerComponent } from './container/periferico-container/periferico-container.component';
import { PerifericoViewComponent } from './view/periferico-view/periferico-view.component';

import { PesajeFacade } from './facade/pesaje.facade';
import { PesajeService } from './service/pesaje.service';
import { PesajeComponent } from './component/pesaje/pesaje.component';
import { PesajeContainerComponent } from './container/pesaje-container/pesaje-container.component';
import { PesajeViewComponent } from './view/pesaje-view/pesaje-view.component';

import { PoliciaFacade } from './facade/policia.facade';
import { PoliciaService } from './service/policia.service';
import { PoliciaComponent } from './component/policia/policia.component';
import { PoliciaContainerComponent } from './container/policia-container/policia-container.component';
import { PoliciaViewComponent } from './view/policia-view/policia-view.component';

import { RegistroVehiculoFacade } from './facade/registro-vehiculo.facade';
import { RegistroVehiculoService } from './service/registro-vehiculo.service';
import { RegistroVehiculoComponent } from './component/registro-vehiculo/registro-vehiculo.component';
import { RegistroVehiculoContainerComponent } from './container/registro-vehiculo-container/registro-vehiculo-container.component';
import { RegistroVehiculoViewComponent } from './view/registro-vehiculo-view/registro-vehiculo-view.component';

import { TramaComunicacionFacade } from './facade/trama-comunicacion.facade';
import { TramaComunicacionService } from './service/trama-comunicacion.service';
import { TramaComunicacionComponent } from './component/trama-comunicacion/trama-comunicacion.component';
import { TramaComunicacionContainerComponent } from './container/trama-comunicacion-container/trama-comunicacion-container.component';
import { TramaComunicacionViewComponent } from './view/trama-comunicacion-view/trama-comunicacion-view.component';

import { TransitoDinamicaFacade } from './facade/transito-dinamica.facade';
import { TransitoDinamicaService } from './service/transito-dinamica.service';
import { TransitoDinamicaComponent } from './component/transito-dinamica/transito-dinamica.component';
import { TransitoDinamicaContainerComponent } from './container/transito-dinamica-container/transito-dinamica-container.component';
import { TransitoDinamicaViewComponent } from './view/transito-dinamica-view/transito-dinamica-view.component';

import { UsuarioFacade } from './facade/usuario.facade';
import { UsuarioService } from './service/usuario.service';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioContainerComponent } from './container/usuario-container/usuario-container.component';
import { UsuarioViewComponent } from './view/usuario-view/usuario-view.component';

import { VehiculoFacade } from './facade/vehiculo.facade';
import { VehiculoService } from './service/vehiculo.service';
import { VehiculoComponent } from './component/vehiculo/vehiculo.component';
import { VehiculoContainerComponent } from './container/vehiculo-container/vehiculo-container.component';
import { VehiculoViewComponent } from './view/vehiculo-view/vehiculo-view.component';

import { VehiculoSobrepesoFacade } from './facade/vehiculo-sobrepeso.facade';
import { VehiculoSobrepesoService } from './service/vehiculo-sobrepeso.service';
import { VehiculoSobrepesoComponent } from './component/vehiculo-sobrepeso/vehiculo-sobrepeso.component';
import { VehiculoSobrepesoContainerComponent } from './container/vehiculo-sobrepeso-container/vehiculo-sobrepeso-container.component';
import { VehiculoSobrepesoViewComponent } from './view/vehiculo-sobrepeso-view/vehiculo-sobrepeso-view.component';

import { SharedModule } from '@app/module/shared/shared.module';
import { AutopistasRoutingModule } from '@app/module/autopistas/autopistas.routing.module';

/**
 * TODO: Description of {@code AutopistasModule}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@NgModule({
    declarations: [
        BadgeComponent,
        BadgeContainerComponent,
        BadgeViewComponent,
        CategoriaComponent,
        CategoriaContainerComponent,
        CategoriaViewComponent,
        ComparendoComponent,
        ComparendoContainerComponent,
        ComparendoViewComponent,
        ConductorComponent,
        ConductorContainerComponent,
        ConductorViewComponent,
        ConfiguracionComponent,
        ConfiguracionContainerComponent,
        ConfiguracionViewComponent,
        MenuComponent,
        MenuContainerComponent,
        MenuViewComponent,
        MercanciaComponent,
        MercanciaContainerComponent,
        MercanciaViewComponent,
        PerifericoComponent,
        PerifericoContainerComponent,
        PerifericoViewComponent,
        PesajeComponent,
        PesajeContainerComponent,
        PesajeViewComponent,
        PoliciaComponent,
        PoliciaContainerComponent,
        PoliciaViewComponent,
        RegistroVehiculoComponent,
        RegistroVehiculoContainerComponent,
        RegistroVehiculoViewComponent,
        TramaComunicacionComponent,
        TramaComunicacionContainerComponent,
        TramaComunicacionViewComponent,
        TransitoDinamicaComponent,
        TransitoDinamicaContainerComponent,
        TransitoDinamicaViewComponent,
        UsuarioComponent,
        UsuarioContainerComponent,
        UsuarioViewComponent,
        VehiculoComponent,
        VehiculoContainerComponent,
        VehiculoViewComponent,
        VehiculoSobrepesoComponent,
        VehiculoSobrepesoContainerComponent,
        VehiculoSobrepesoViewComponent,
    ],
    imports: [
        // ng modules
        CommonModule,
        DxBoxModule,
        DxButtonModule,
        DxCalendarModule,
        DxCheckBoxModule,
        DxContextMenuModule,
        DxDataGridModule,
        DxDateBoxModule,
        DxDrawerModule,
        DxDropDownBoxModule,
        DxDropDownButtonModule,
        DxFormModule,
        DxHtmlEditorModule,
        DxListModule,
        DxLoadPanelModule,
        DxPopupModule,
        DxRadioGroupModule,
        DxSchedulerModule,
        DxScrollViewModule,
        DxSelectBoxModule,
        DxTemplateModule,
        DxTextBoxModule,
        DxToolbarModule,
        DxValidatorModule,

        // Own modules
        AutopistasRoutingModule,
        SharedModule
    ],
    exports: [
        BadgeViewComponent,
        CategoriaViewComponent,
        ComparendoViewComponent,
        ConductorViewComponent,
        ConfiguracionViewComponent,
        MenuViewComponent,
        MercanciaViewComponent,
        PerifericoViewComponent,
        PesajeViewComponent,
        PoliciaViewComponent,
        RegistroVehiculoViewComponent,
        TramaComunicacionViewComponent,
        TransitoDinamicaViewComponent,
        UsuarioViewComponent,
        VehiculoViewComponent,
        VehiculoSobrepesoViewComponent,
    ],
    providers: [
        BadgeFacade,
        BadgeService,
        CategoriaFacade,
        CategoriaService,
        ComparendoFacade,
        ComparendoService,
        ConductorFacade,
        ConductorService,
        ConfiguracionFacade,
        ConfiguracionService,
        MenuFacade,
        MenuService,
        MercanciaFacade,
        MercanciaService,
        PerifericoFacade,
        PerifericoService,
        PesajeFacade,
        PesajeService,
        PoliciaFacade,
        PoliciaService,
        RegistroVehiculoFacade,
        RegistroVehiculoService,
        TramaComunicacionFacade,
        TramaComunicacionService,
        TransitoDinamicaFacade,
        TransitoDinamicaService,
        UsuarioFacade,
        UsuarioService,
        VehiculoFacade,
        VehiculoService,
        VehiculoSobrepesoFacade,
        VehiculoSobrepesoService,
    ]
})
export class AutopistasModule { }
