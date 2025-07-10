/*
 * @overview        {MinasModule}
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

import { BasculaFacade } from './facade/bascula.facade';
import { BasculaService } from './service/bascula.service';
import { BasculaComponent } from './component/bascula/bascula.component';
import { BasculaContainerComponent } from './container/bascula-container/bascula-container.component';
import { BasculaViewComponent } from './view/bascula-view/bascula-view.component';

import { CategoriaFacade } from './facade/categoria.facade';
import { CategoriaService } from './service/categoria.service';
import { CategoriaComponent } from './component/categoria/categoria.component';
import { CategoriaContainerComponent } from './container/categoria-container/categoria-container.component';
import { CategoriaViewComponent } from './view/categoria-view/categoria-view.component';

import { CierrePartidaFacade } from './facade/cierre-partida.facade';
import { CierrePartidaService } from './service/cierre-partida.service';
import { CierrePartidaComponent } from './component/cierre-partida/cierre-partida.component';
import { CierrePartidaContainerComponent } from './container/cierre-partida-container/cierre-partida-container.component';
import { CierrePartidaViewComponent } from './view/cierre-partida-view/cierre-partida-view.component';

import { CodigoOrigenFacade } from './facade/codigo-origen.facade';
import { CodigoOrigenService } from './service/codigo-origen.service';
import { CodigoOrigenComponent } from './component/codigo-origen/codigo-origen.component';
import { CodigoOrigenContainerComponent } from './container/codigo-origen-container/codigo-origen-container.component';
import { CodigoOrigenViewComponent } from './view/codigo-origen-view/codigo-origen-view.component';

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

import { ConsecutivoDiarioFacade } from './facade/consecutivo-diario.facade';
import { ConsecutivoDiarioService } from './service/consecutivo-diario.service';
import { ConsecutivoDiarioComponent } from './component/consecutivo-diario/consecutivo-diario.component';
import { ConsecutivoDiarioContainerComponent } from './container/consecutivo-diario-container/consecutivo-diario-container.component';
import { ConsecutivoDiarioViewComponent } from './view/consecutivo-diario-view/consecutivo-diario-view.component';

import { ContratoFacade } from './facade/contrato.facade';
import { ContratoService } from './service/contrato.service';
import { ContratoComponent } from './component/contrato/contrato.component';
import { ContratoContainerComponent } from './container/contrato-container/contrato-container.component';
import { ContratoViewComponent } from './view/contrato-view/contrato-view.component';

import { ControlAccesoFacade } from './facade/control-acceso.facade';
import { ControlAccesoService } from './service/control-acceso.service';
import { ControlAccesoComponent } from './component/control-acceso/control-acceso.component';
import { ControlAccesoContainerComponent } from './container/control-acceso-container/control-acceso-container.component';
import { ControlAccesoViewComponent } from './view/control-acceso-view/control-acceso-view.component';

import { DestinoFacade } from './facade/destino.facade';
import { DestinoService } from './service/destino.service';
import { DestinoComponent } from './component/destino/destino.component';
import { DestinoContainerComponent } from './container/destino-container/destino-container.component';
import { DestinoViewComponent } from './view/destino-view/destino-view.component';

import { FicherosProveedorFacade } from './facade/ficheros-proveedor.facade';
import { FicherosProveedorService } from './service/ficheros-proveedor.service';
import { FicherosProveedorComponent } from './component/ficheros-proveedor/ficheros-proveedor.component';
import { FicherosProveedorContainerComponent } from './container/ficheros-proveedor-container/ficheros-proveedor-container.component';
import { FicherosProveedorViewComponent } from './view/ficheros-proveedor-view/ficheros-proveedor-view.component';

import { GeneradorPartidaFacade } from './facade/generador-partida.facade';
import { GeneradorPartidaService } from './service/generador-partida.service';
import { GeneradorPartidaComponent } from './component/generador-partida/generador-partida.component';
import { GeneradorPartidaContainerComponent } from './container/generador-partida-container/generador-partida-container.component';
import { GeneradorPartidaViewComponent } from './view/generador-partida-view/generador-partida-view.component';

import { IndicadorFacade } from './facade/indicador.facade';
import { IndicadorService } from './service/indicador.service';
import { IndicadorComponent } from './component/indicador/indicador.component';
import { IndicadorContainerComponent } from './container/indicador-container/indicador-container.component';
import { IndicadorViewComponent } from './view/indicador-view/indicador-view.component';

import { MinaFacade } from './facade/mina.facade';
import { MinaService } from './service/mina.service';
import { MinaComponent } from './component/mina/mina.component';
import { MinaContainerComponent } from './container/mina-container/mina-container.component';
import { MinaViewComponent } from './view/mina-view/mina-view.component';

import { MuestraFacade } from './facade/muestra.facade';
import { MuestraService } from './service/muestra.service';
import { MuestraComponent } from './component/muestra/muestra.component';
import { MuestraContainerComponent } from './container/muestra-container/muestra-container.component';
import { MuestraViewComponent } from './view/muestra-view/muestra-view.component';

import { OrigenFacade } from './facade/origen.facade';
import { OrigenService } from './service/origen.service';
import { OrigenComponent } from './component/origen/origen.component';
import { OrigenContainerComponent } from './container/origen-container/origen-container.component';
import { OrigenViewComponent } from './view/origen-view/origen-view.component';

import { ParqueFacade } from './facade/parque.facade';
import { ParqueService } from './service/parque.service';
import { ParqueComponent } from './component/parque/parque.component';
import { ParqueContainerComponent } from './container/parque-container/parque-container.component';
import { ParqueViewComponent } from './view/parque-view/parque-view.component';

import { ProductoFacade } from './facade/producto.facade';
import { ProductoService } from './service/producto.service';
import { ProductoComponent } from './component/producto/producto.component';
import { ProductoContainerComponent } from './container/producto-container/producto-container.component';
import { ProductoViewComponent } from './view/producto-view/producto-view.component';

import { ProveedorFacade } from './facade/proveedor.facade';
import { ProveedorService } from './service/proveedor.service';
import { ProveedorComponent } from './component/proveedor/proveedor.component';
import { ProveedorContainerComponent } from './container/proveedor-container/proveedor-container.component';
import { ProveedorViewComponent } from './view/proveedor-view/proveedor-view.component';

import { RegistroEntradaSalidaFacade } from './facade/registro-entrada-salida.facade';
import { RegistroEntradaSalidaService } from './service/registro-entrada-salida.service';
import { RegistroEntradaSalidaComponent } from './component/registro-entrada-salida/registro-entrada-salida.component';
import { RegistroEntradaSalidaContainerComponent } from './container/registro-entrada-salida-container/registro-entrada-salida-container.component';
import { RegistroEntradaSalidaViewComponent } from './view/registro-entrada-salida-view/registro-entrada-salida-view.component';

import { SancionFacade } from './facade/sancion.facade';
import { SancionService } from './service/sancion.service';
import { SancionComponent } from './component/sancion/sancion.component';
import { SancionContainerComponent } from './container/sancion-container/sancion-container.component';
import { SancionViewComponent } from './view/sancion-view/sancion-view.component';

import { TemporalFacade } from './facade/temporal.facade';
import { TemporalService } from './service/temporal.service';
import { TemporalComponent } from './component/temporal/temporal.component';
import { TemporalContainerComponent } from './container/temporal-container/temporal-container.component';
import { TemporalViewComponent } from './view/temporal-view/temporal-view.component';

import { TituloMineroFacade } from './facade/titulo-minero.facade';
import { TituloMineroService } from './service/titulo-minero.service';
import { TituloMineroComponent } from './component/titulo-minero/titulo-minero.component';
import { TituloMineroContainerComponent } from './container/titulo-minero-container/titulo-minero-container.component';
import { TituloMineroViewComponent } from './view/titulo-minero-view/titulo-minero-view.component';

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

import { VehiculoEnTransitoFacade } from './facade/vehiculo-en-transito.facade';
import { VehiculoEnTransitoService } from './service/vehiculo-en-transito.service';
import { VehiculoEnTransitoComponent } from './component/vehiculo-en-transito/vehiculo-en-transito.component';
import { VehiculoEnTransitoContainerComponent } from './container/vehiculo-en-transito-container/vehiculo-en-transito-container.component';
import { VehiculoEnTransitoViewComponent } from './view/vehiculo-en-transito-view/vehiculo-en-transito-view.component';

import { SharedModule } from '@app/module/shared/shared.module';
import { MinasRoutingModule } from '@app/module/minas/minas.routing.module';

/**
 * TODO: Description of {@code MinasModule}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@NgModule({
    declarations: [
        BasculaComponent,
        BasculaContainerComponent,
        BasculaViewComponent,
        CategoriaComponent,
        CategoriaContainerComponent,
        CategoriaViewComponent,
        CierrePartidaComponent,
        CierrePartidaContainerComponent,
        CierrePartidaViewComponent,
        CodigoOrigenComponent,
        CodigoOrigenContainerComponent,
        CodigoOrigenViewComponent,
        ConductorComponent,
        ConductorContainerComponent,
        ConductorViewComponent,
        ConfiguracionComponent,
        ConfiguracionContainerComponent,
        ConfiguracionViewComponent,
        ConsecutivoDiarioComponent,
        ConsecutivoDiarioContainerComponent,
        ConsecutivoDiarioViewComponent,
        ContratoComponent,
        ContratoContainerComponent,
        ContratoViewComponent,
        ControlAccesoComponent,
        ControlAccesoContainerComponent,
        ControlAccesoViewComponent,
        DestinoComponent,
        DestinoContainerComponent,
        DestinoViewComponent,
        FicherosProveedorComponent,
        FicherosProveedorContainerComponent,
        FicherosProveedorViewComponent,
        GeneradorPartidaComponent,
        GeneradorPartidaContainerComponent,
        GeneradorPartidaViewComponent,
        IndicadorComponent,
        IndicadorContainerComponent,
        IndicadorViewComponent,
        MinaComponent,
        MinaContainerComponent,
        MinaViewComponent,
        MuestraComponent,
        MuestraContainerComponent,
        MuestraViewComponent,
        OrigenComponent,
        OrigenContainerComponent,
        OrigenViewComponent,
        ParqueComponent,
        ParqueContainerComponent,
        ParqueViewComponent,
        ProductoComponent,
        ProductoContainerComponent,
        ProductoViewComponent,
        ProveedorComponent,
        ProveedorContainerComponent,
        ProveedorViewComponent,
        RegistroEntradaSalidaComponent,
        RegistroEntradaSalidaContainerComponent,
        RegistroEntradaSalidaViewComponent,
        SancionComponent,
        SancionContainerComponent,
        SancionViewComponent,
        TemporalComponent,
        TemporalContainerComponent,
        TemporalViewComponent,
        TituloMineroComponent,
        TituloMineroContainerComponent,
        TituloMineroViewComponent,
        UsuarioComponent,
        UsuarioContainerComponent,
        UsuarioViewComponent,
        VehiculoComponent,
        VehiculoContainerComponent,
        VehiculoViewComponent,
        VehiculoEnTransitoComponent,
        VehiculoEnTransitoContainerComponent,
        VehiculoEnTransitoViewComponent,
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
        MinasRoutingModule,
        SharedModule
    ],
    exports: [
        BasculaViewComponent,
        CategoriaViewComponent,
        CierrePartidaViewComponent,
        CodigoOrigenViewComponent,
        ConductorViewComponent,
        ConfiguracionViewComponent,
        ConsecutivoDiarioViewComponent,
        ContratoViewComponent,
        ControlAccesoViewComponent,
        DestinoViewComponent,
        FicherosProveedorViewComponent,
        GeneradorPartidaViewComponent,
        IndicadorViewComponent,
        MinaViewComponent,
        MuestraViewComponent,
        OrigenViewComponent,
        ParqueViewComponent,
        ProductoViewComponent,
        ProveedorViewComponent,
        RegistroEntradaSalidaViewComponent,
        SancionViewComponent,
        TemporalViewComponent,
        TituloMineroViewComponent,
        UsuarioViewComponent,
        VehiculoViewComponent,
        VehiculoEnTransitoViewComponent,
    ],
    providers: [
        BasculaFacade,
        BasculaService,
        CategoriaFacade,
        CategoriaService,
        CierrePartidaFacade,
        CierrePartidaService,
        CodigoOrigenFacade,
        CodigoOrigenService,
        ConductorFacade,
        ConductorService,
        ConfiguracionFacade,
        ConfiguracionService,
        ConsecutivoDiarioFacade,
        ConsecutivoDiarioService,
        ContratoFacade,
        ContratoService,
        ControlAccesoFacade,
        ControlAccesoService,
        DestinoFacade,
        DestinoService,
        FicherosProveedorFacade,
        FicherosProveedorService,
        GeneradorPartidaFacade,
        GeneradorPartidaService,
        IndicadorFacade,
        IndicadorService,
        MinaFacade,
        MinaService,
        MuestraFacade,
        MuestraService,
        OrigenFacade,
        OrigenService,
        ParqueFacade,
        ParqueService,
        ProductoFacade,
        ProductoService,
        ProveedorFacade,
        ProveedorService,
        RegistroEntradaSalidaFacade,
        RegistroEntradaSalidaService,
        SancionFacade,
        SancionService,
        TemporalFacade,
        TemporalService,
        TituloMineroFacade,
        TituloMineroService,
        UsuarioFacade,
        UsuarioService,
        VehiculoFacade,
        VehiculoService,
        VehiculoEnTransitoFacade,
        VehiculoEnTransitoService,
    ]
})
export class MinasModule { }
