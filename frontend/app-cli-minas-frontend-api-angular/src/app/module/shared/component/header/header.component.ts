/*
 * @fileoverview    {HeaderComponent}
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
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Routes, Router } from '@angular/router';

/**
 * TODO: Description of {@code HeaderComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: false,
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public topMenu: any[];
    public showSubmenuModes: any;
    public showFirstSubmenuModes: any;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(private router: Router) {

        this.topMenu = [
            {
                name: 'Bascula',
                route: 'bascula',
                items: []
            },            {
                name: 'Categoria',
                route: 'categoria',
                items: []
            },            {
                name: 'CierrePartida',
                route: 'cierre-partida',
                items: []
            },            {
                name: 'CodigoOrigen',
                route: 'codigo-origen',
                items: []
            },            {
                name: 'Conductor',
                route: 'conductor',
                items: []
            },            {
                name: 'Configuracion',
                route: 'configuracion',
                items: []
            },            {
                name: 'ConsecutivoDiario',
                route: 'consecutivo-diario',
                items: []
            },            {
                name: 'Contrato',
                route: 'contrato',
                items: []
            },            {
                name: 'ControlAcceso',
                route: 'control-acceso',
                items: []
            },            {
                name: 'Destino',
                route: 'destino',
                items: []
            },            {
                name: 'FicherosProveedor',
                route: 'ficheros-proveedor',
                items: []
            },            {
                name: 'GeneradorPartida',
                route: 'generador-partida',
                items: []
            },            {
                name: 'Indicador',
                route: 'indicador',
                items: []
            },            {
                name: 'Mina',
                route: 'mina',
                items: []
            },            {
                name: 'Muestra',
                route: 'muestra',
                items: []
            },            {
                name: 'Origen',
                route: 'origen',
                items: []
            },            {
                name: 'Parque',
                route: 'parque',
                items: []
            },            {
                name: 'Producto',
                route: 'producto',
                items: []
            },            {
                name: 'Proveedor',
                route: 'proveedor',
                items: []
            },            {
                name: 'RegistroEntradaSalida',
                route: 'registro-entrada-salida',
                items: []
            },            {
                name: 'Sancion',
                route: 'sancion',
                items: []
            },            {
                name: 'Temporal',
                route: 'temporal',
                items: []
            },            {
                name: 'TituloMinero',
                route: 'titulo-minero',
                items: []
            },            {
                name: 'Usuario',
                route: 'usuario',
                items: []
            },            {
                name: 'Vehiculo',
                route: 'vehiculo',
                items: []
            },            {
                name: 'VehiculoEnTransito',
                route: 'vehiculo-en-transito',
                items: []
            },
        ];

        this.showSubmenuModes = [
            {
                name: "onhover",
                delay: { show: 0, hide: 0 }
            },
            {
                name: "onclick",
                delay: { show: 0, hide: 0 }
            }
        ];

        this.showFirstSubmenuModes = this.showSubmenuModes[0];

    }

    /**
     * TODO: Description of method {@code ngOnInit}.
     *
     */
    public ngOnInit(): void {

    }

    /**
     * TODO: Description of method {@code itemClick}.
     *
     */
    public itemClick(data: any): void {
        if (data.route && (!data.items || data.items.length == 0))
            this.router.navigateByUrl(data.route);
    }

}
