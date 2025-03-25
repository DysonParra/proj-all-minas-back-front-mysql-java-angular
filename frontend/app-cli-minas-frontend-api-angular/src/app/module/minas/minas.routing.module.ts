/*
 * @fileoverview    {MinasRoutingModule}
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

import { BasculaViewComponent } from './view/bascula-view/bascula-view.component';import { CategoriaViewComponent } from './view/categoria-view/categoria-view.component';import { CierrePartidaViewComponent } from './view/cierre-partida-view/cierre-partida-view.component';import { CodigoOrigenViewComponent } from './view/codigo-origen-view/codigo-origen-view.component';import { ConductorViewComponent } from './view/conductor-view/conductor-view.component';import { ConfiguracionViewComponent } from './view/configuracion-view/configuracion-view.component';import { ConsecutivoDiarioViewComponent } from './view/consecutivo-diario-view/consecutivo-diario-view.component';import { ContratoViewComponent } from './view/contrato-view/contrato-view.component';import { ControlAccesoViewComponent } from './view/control-acceso-view/control-acceso-view.component';import { DestinoViewComponent } from './view/destino-view/destino-view.component';import { FicherosProveedorViewComponent } from './view/ficheros-proveedor-view/ficheros-proveedor-view.component';import { GeneradorPartidaViewComponent } from './view/generador-partida-view/generador-partida-view.component';import { IndicadorViewComponent } from './view/indicador-view/indicador-view.component';import { MinaViewComponent } from './view/mina-view/mina-view.component';import { MuestraViewComponent } from './view/muestra-view/muestra-view.component';import { OrigenViewComponent } from './view/origen-view/origen-view.component';import { ParqueViewComponent } from './view/parque-view/parque-view.component';import { ProductoViewComponent } from './view/producto-view/producto-view.component';import { ProveedorViewComponent } from './view/proveedor-view/proveedor-view.component';import { RegistroEntradaSalidaViewComponent } from './view/registro-entrada-salida-view/registro-entrada-salida-view.component';import { SancionViewComponent } from './view/sancion-view/sancion-view.component';import { TemporalViewComponent } from './view/temporal-view/temporal-view.component';import { TituloMineroViewComponent } from './view/titulo-minero-view/titulo-minero-view.component';import { UsuarioViewComponent } from './view/usuario-view/usuario-view.component';import { VehiculoViewComponent } from './view/vehiculo-view/vehiculo-view.component';import { VehiculoEnTransitoViewComponent } from './view/vehiculo-en-transito-view/vehiculo-en-transito-view.component';

const routes: Routes = [
    {
        path: 'bascula',
        component: BasculaViewComponent
    },    {
        path: 'categoria',
        component: CategoriaViewComponent
    },    {
        path: 'cierre-partida',
        component: CierrePartidaViewComponent
    },    {
        path: 'codigo-origen',
        component: CodigoOrigenViewComponent
    },    {
        path: 'conductor',
        component: ConductorViewComponent
    },    {
        path: 'configuracion',
        component: ConfiguracionViewComponent
    },    {
        path: 'consecutivo-diario',
        component: ConsecutivoDiarioViewComponent
    },    {
        path: 'contrato',
        component: ContratoViewComponent
    },    {
        path: 'control-acceso',
        component: ControlAccesoViewComponent
    },    {
        path: 'destino',
        component: DestinoViewComponent
    },    {
        path: 'ficheros-proveedor',
        component: FicherosProveedorViewComponent
    },    {
        path: 'generador-partida',
        component: GeneradorPartidaViewComponent
    },    {
        path: 'indicador',
        component: IndicadorViewComponent
    },    {
        path: 'mina',
        component: MinaViewComponent
    },    {
        path: 'muestra',
        component: MuestraViewComponent
    },    {
        path: 'origen',
        component: OrigenViewComponent
    },    {
        path: 'parque',
        component: ParqueViewComponent
    },    {
        path: 'producto',
        component: ProductoViewComponent
    },    {
        path: 'proveedor',
        component: ProveedorViewComponent
    },    {
        path: 'registro-entrada-salida',
        component: RegistroEntradaSalidaViewComponent
    },    {
        path: 'sancion',
        component: SancionViewComponent
    },    {
        path: 'temporal',
        component: TemporalViewComponent
    },    {
        path: 'titulo-minero',
        component: TituloMineroViewComponent
    },    {
        path: 'usuario',
        component: UsuarioViewComponent
    },    {
        path: 'vehiculo',
        component: VehiculoViewComponent
    },    {
        path: 'vehiculo-en-transito',
        component: VehiculoEnTransitoViewComponent
    },
];

/**
 * TODO: Description of {@code MinasRoutingModule}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MinasRoutingModule { }
