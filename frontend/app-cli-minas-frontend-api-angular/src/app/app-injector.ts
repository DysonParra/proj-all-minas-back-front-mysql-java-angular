/*
 * @fileoverview    {AppInjector}
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
import { Injector } from '@angular/core';

/**
 * TODO: Description of {@code AppInjector}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
export class AppInjector {

    private static instance: AppInjector;
    private injector: Injector;

    /**
     * TODO: Description of method {@code getInstance}.
     *
     */
    public static getInstance(): AppInjector {
        if (!AppInjector.instance) {
            AppInjector.instance = new AppInjector();
        }
        return AppInjector.instance;
    }

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    private constructor() {

    }

    /**
     * TODO: Description of method {@code setInjector}.
     *
     */
    public setInjector(injector: Injector): void {
        this.injector = injector;
    }

    /**
     * TODO: Description of method {@code getInjector}.
     *
     */
    public getInjector(): Injector {
        return this.injector;
    }

}
