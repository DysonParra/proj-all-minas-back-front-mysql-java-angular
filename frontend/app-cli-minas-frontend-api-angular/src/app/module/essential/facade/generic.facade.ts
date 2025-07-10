/*
 * @overview        {GenericFacade}
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
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { GenericViewModel } from '../model/generic.model';
import { GenericService } from '../service/generic.service';
import { GenericState } from '../state/generic.state';

import { ResponseWrapper } from '../model/response-wrapper.model';

/**
 * TODO: Description of {@code GenericFacade}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export abstract class GenericFacade<Model extends GenericViewModel<any>> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    protected constructor(
        protected entityService: GenericService<Model>,
        protected entityState: GenericState<Model>) {

    }

    /**
     * TODO: Description of method {@code getCurrentPageEntities}.
     *
     */
    public getCurrentPageEntities(): Observable<Model[]> {
        console.log("Calling Subscription getCurrentPageEntities...");
        return this.entityState.getCurrentPageEntities();
    }

    /**
     * TODO: Description of method {@code getCurrentPageEntitiesQuantity}.
     *
     */
    public getCurrentPageEntitiesQuantity(): Observable<number> {
        console.log("Calling Subscription getCurrentPageEntitiesQuantity...");
        return this.entityState.getCurrentPageEntitiesQuantity();
    }

    /**
     * TODO: Description of method {@code getTotalEntitiesQuantity}.
     *
     */
    public getTotalEntitiesQuantity(): Observable<number> {
        console.log("Calling Subscription getTotalEntitiesQuantity...");
        return this.entityState.getTotalEntitiesQuantity();
    }

    /**
     * TODO: Description of method {@code getEntityUpdating}.
     *
     */
    public getEntityUpdating(): Model {
        console.log("Calling Subscription getEntityUpdating...");
        return this.entityState.getEntityUpdating();
    }

    /**
     * TODO: Description of method {@code setEntityUpdating}.
     *
     */
    public setEntityUpdating(entity: Model): void {
        console.log("Calling Subscription setEntityUpdating...");
        this.entityState.setEntityUpdating(entity);
    }

    /**
     * TODO: Description of method {@code getEntityRemoving}.
     *
     */
    public getEntityRemoving(): Model {
        console.log("Calling Subscription getEntityRemoving...");
        return this.entityState.getEntityRemoving();
    }

    /**
     * TODO: Description of method {@code setEntityRemoving}.
     *
     */
    public setEntityRemoving(entity: Model): void {
        console.log("Calling Subscription setEntityRemoving...");
        this.entityState.setEntityRemoving(entity);
    }

    /**
     * TODO: Description of method {@code getAllEntities}.
     *
     */
    public getAllEntities(): Observable<Model[]> {
        console.log("Calling Subscription getAllEntities...");
        return this.entityService.getAllEntities().pipe(
            tap(res => {
                console.log("Service response:");
                console.log(res);
                if (res != undefined) {
                    this.entityState.setCurrentPageEntities(res);
                    this.entityState.setTotalEntitiesQuantity((res.length));
                } else {
                    this.entityState.setCurrentPageEntities(undefined as any);
                    this.entityState.setTotalEntitiesQuantity(0);
                }
                this.entityState.getCurrentPageEntitiesQuantity().subscribe((resp) => console.log(`Paged entities: ${resp}`)).unsubscribe();
                this.entityState.getTotalEntitiesQuantity().subscribe((resp) => console.log(`Total entities: ${resp}`)).unsubscribe();
            })
        );
    }

    /**
     * TODO: Description of method {@code getAllEntitiesPaged}.
     *
     */
    public getAllEntitiesPaged(size: number, page: number): Observable<Model[]> {
        console.log("Calling Subscription getAllEntitiesPaged...");
        return this.entityService.getAllEntitiesPaged(size, page).pipe(
            tap(res => {
                console.log("Service response:");
                console.log(res);
                if (res != undefined) {
                    this.entityState.setCurrentPageEntities(res);
                    this.entityState.setTotalEntitiesQuantity((res.length));
                } else {
                    this.entityState.setCurrentPageEntities(undefined as any);
                    this.entityState.setTotalEntitiesQuantity(0);
                }
                this.entityState.getCurrentPageEntitiesQuantity().subscribe((resp) => console.log(`Paged entities: ${resp}`)).unsubscribe();
                this.entityState.getTotalEntitiesQuantity().subscribe((resp) => console.log(`Total entities: ${resp}`)).unsubscribe();
            })
        );
    }

    /**
     * TODO: Description of method {@code getAllEntitiesPagedWithHeaders}.
     *
     */
    public getAllEntitiesPagedWithHeaders(size: number, page: number): Observable<ResponseWrapper<Model>> {
        console.log("Calling Subscription getAllEntitiesPagedWithHeaders...");
        return this.entityService.getAllEntitiesPagedWithHeaders(size, page).pipe(
            tap(res => {
                console.log("Service response:");
                console.log(res);
                if (res != undefined) {
                    this.entityState.setCurrentPageEntities(res.entities);
                    this.entityState.setTotalEntitiesQuantity(parseInt(res.headers.get('X-Total-Count')));
                } else {
                    this.entityState.setCurrentPageEntities(undefined as any);
                    this.entityState.setTotalEntitiesQuantity(0);
                }
                this.entityState.getCurrentPageEntitiesQuantity().subscribe((resp) => console.log(`Paged entities: ${resp}`)).unsubscribe();
                this.entityState.getTotalEntitiesQuantity().subscribe((resp) => console.log(`Total entities: ${resp}`)).unsubscribe();
            }));
    }

    /**
     * TODO: Description of method {@code searchEntities}.
     *
     */
    public searchEntities(currentSearch: string): Observable<Model[]> {
        console.log("Calling Subscription searchEntities...");
        return this.entityService.searchEntities(currentSearch).pipe(
            tap(res => {
                console.log("Service response:");
                console.log(res);
                if (res != undefined) {
                    this.entityState.setCurrentPageEntities(res);
                    this.entityState.setTotalEntitiesQuantity((res.length));
                } else {
                    this.entityState.setCurrentPageEntities(undefined as any);
                    this.entityState.setTotalEntitiesQuantity(0);
                }
                this.entityState.getCurrentPageEntitiesQuantity().subscribe((resp) => console.log(`Paged entities: ${resp}`)).unsubscribe();
                this.entityState.getTotalEntitiesQuantity().subscribe((resp) => console.log(`Total entities: ${resp}`)).unsubscribe();
            }));
    }

    /**
     * TODO: Description of method {@code searchEntitiesPaged}.
     *
     */
    public searchEntitiesPaged(currentSearch: string, size: number, page: number): Observable<Model[]> {
        console.log("Calling Subscription searchEntitiesPaged...");
        return this.entityService.searchEntitiesPaged(currentSearch, size, page).pipe(
            tap(res => {
                console.log("Service response:");
                console.log(res);
                if (res != undefined) {
                    this.entityState.setCurrentPageEntities(res);
                    this.entityState.setTotalEntitiesQuantity((res.length));
                } else {
                    this.entityState.setCurrentPageEntities(undefined as any);
                    this.entityState.setTotalEntitiesQuantity(0);
                }
                this.entityState.getCurrentPageEntitiesQuantity().subscribe((resp) => console.log(`Paged entities: ${resp}`)).unsubscribe();
                this.entityState.getTotalEntitiesQuantity().subscribe((resp) => console.log(`Total entities: ${resp}`)).unsubscribe();
            }));
    }

    /**
     * TODO: Description of method {@code searchEntitiesPagedWithHeaders}.
     *
     */
    public searchEntitiesPagedWithHeaders(currentSearch: string, size: number, page: number): Observable<ResponseWrapper<Model>> {
        console.log("Calling Subscription searchEntitiesPagedWithHeaders...");
        return this.entityService.searchEntitiesPagedWithHeaders(currentSearch, size, page).pipe(
            tap(res => {
                console.log("Service response:");
                console.log(res);
                if (res != undefined) {
                    this.entityState.setCurrentPageEntities(res.entities);
                    this.entityState.setTotalEntitiesQuantity(parseInt(res.headers.get('X-Total-Count')));
                } else {
                    this.entityState.setCurrentPageEntities(undefined as any);
                    this.entityState.setTotalEntitiesQuantity(0);
                }
                this.entityState.getCurrentPageEntitiesQuantity().subscribe((resp) => console.log(`Paged entities: ${resp}`)).unsubscribe();
                this.entityState.getTotalEntitiesQuantity().subscribe((resp) => console.log(`Total entities: ${resp}`)).unsubscribe();
            }));
    }

    /**
     * TODO: Description of method {@code saveEntity}.
     *
     */
    public saveEntity(entity: Model): Observable<Model> {
        console.log("Calling Subscription saveEntity...");
        return this.entityService.saveEntity(entity).pipe(
            tap(res => {
                console.log("Service response:");
                console.log(res);
                if (res != undefined) {
                    this.entityState.saveEntity(res);
                } else {
                    //this.entityState.saveEntity(undefined as any);
                }
                this.entityState.getCurrentPageEntitiesQuantity().subscribe((resp) => console.log(`Paged entities: ${resp}`)).unsubscribe();
                this.entityState.getTotalEntitiesQuantity().subscribe((resp) => console.log(`Total entities: ${resp}`)).unsubscribe();
            }));
    }

    /**
     * TODO: Description of method {@code updateEntity}.
     *
     */
    public updateEntity(entity: Model): Observable<Model> {
        console.log("Calling Subscription updateEntity...");
        return this.entityService.updateEntity(entity).pipe(
            tap(res => {
                console.log("Service response:");
                console.log(res);
                if (res != undefined) {
                    this.entityState.updateEntity(entity);
                } else {
                    //this.entityState.updateEntity(undefined as any);
                }
                this.entityState.getCurrentPageEntitiesQuantity().subscribe((resp) => console.log(`Paged entities: ${resp}`)).unsubscribe();
                this.entityState.getTotalEntitiesQuantity().subscribe((resp) => console.log(`Total entities: ${resp}`)).unsubscribe();
            }));
    }

    /**
     * TODO: Description of method {@code deleteEntity}.
     *
     */
    public deleteEntity(entity: Model): Observable<boolean> {
        console.log("Calling Subscription deleteEntity...");
        return this.entityService.deleteEntity(entity).pipe(
            tap(res => {
                console.log("Service response:");
                console.log(res);
                if (res != undefined) {
                    this.entityState.deleteEntity(entity);
                } else {
                    //this.entityState.deleteEntity(undefined as any);
                }
                this.entityState.getCurrentPageEntitiesQuantity().subscribe((resp) => console.log(`Paged entities: ${resp}`)).unsubscribe();
                this.entityState.getTotalEntitiesQuantity().subscribe((resp) => console.log(`Total entities: ${resp}`)).unsubscribe();
            }));
    }

}