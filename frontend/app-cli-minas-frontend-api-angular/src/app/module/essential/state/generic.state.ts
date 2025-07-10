/*
 * @overview        {GenericState}
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
import { BehaviorSubject, Observable } from 'rxjs';
import { GenericViewModel } from '../model/generic.model';

/**
 * TODO: Description of {@code GenericState}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export abstract class GenericState<Model extends GenericViewModel<any>> {

    private currentPageEntities$ = new BehaviorSubject<Model[]>(null as any);
    private currentPageEntitiesQuantity$ = new BehaviorSubject<number>(null as any);
    private totalEntitiesQuantity$ = new BehaviorSubject<number>(null as any);
    private entityUpdating: Model = undefined;
    private entityRemoving: Model = undefined;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    protected constructor() {

    }

    /**
     * TODO: Description of method {@code getTotalEntitiesQuantity}.
     *
     */
    public getTotalEntitiesQuantity(): Observable<number> {
        console.log("Calling State getTotalEntitiesQuantity...");
        return this.totalEntitiesQuantity$.asObservable();
    }

    /**
     * TODO: Description of method {@code setTotalEntitiesQuantity}.
     *
     */
    public setTotalEntitiesQuantity(newQuantity: number): void {
        console.log("Calling State setTotalEntitiesQuantity...");
        this.totalEntitiesQuantity$.next(newQuantity);
    }

    /**
     * TODO: Description of method {@code getCurrentPageEntitiesQuantity}.
     *
     */
    public getCurrentPageEntitiesQuantity(): Observable<number> {
        console.log("Calling State getCurrentPageEntitiesQuantity...");
        return this.currentPageEntitiesQuantity$.asObservable();
    }

    /**
     * TODO: Description of method {@code setCurrentPageEntitiesQuantity}.
     *
     */
    public setCurrentPageEntitiesQuantity(newQuantity: number): void {
        console.log("Calling State setCurrentPageEntitiesQuantity...");
        this.currentPageEntitiesQuantity$.next(newQuantity);
    }

    /**
     * TODO: Description of method {@code getCurrentPageEntities}.
     *
     */
    public getCurrentPageEntities(): Observable<Model[]> {
        console.log("Calling State getCurrentPageEntities...");
        return this.currentPageEntities$.asObservable();
    }

    /**
     * TODO: Description of method {@code setCurrentPageEntities}.
     *
     */
    public setCurrentPageEntities(entities: Model[]): void {
        console.log("Calling State setCurrentPageEntities...");
        if (entities != undefined && entities != null)
            this.setCurrentPageEntitiesQuantity(entities.length);
        else
            this.setCurrentPageEntitiesQuantity(0);
        this.currentPageEntities$.next(entities);
    }

    /**
     * TODO: Description of method {@code getEntityUpdating}.
     *
     */
    public getEntityUpdating(): Model {
        console.log("Calling State getEntityUpdating...");
        return this.entityUpdating;
    }

    /**
     * TODO: Description of method {@code setEntityUpdating}.
     *
     */
    public setEntityUpdating(entity: Model): void {
        console.log("Calling State setEntityUpdating...");
        this.entityUpdating = entity;
    }

    /**
     * TODO: Description of method {@code getEntityRemoving}.
     *
     */
    public getEntityRemoving(): Model {
        console.log("Calling State getEntityRemoving...");
        return this.entityRemoving;
    }

    /**
     * TODO: Description of method {@code setEntityRemoving}.
     *
     */
    public setEntityRemoving(entity: Model): void {
        console.log("Calling State setEntityRemoving...");
        this.entityRemoving = entity;
    }

    /**
     * TODO: Description of method {@code saveEntity}.
     *
     */
    public saveEntity(entity: Model): void {
        console.log("Calling State saveEntity...");
        this.setCurrentPageEntitiesQuantity(this.currentPageEntitiesQuantity$.getValue() + 1);
        this.setTotalEntitiesQuantity(this.totalEntitiesQuantity$.getValue() + 1);
        const currentEntities = this.currentPageEntities$.getValue();
        this.currentPageEntities$.next([...currentEntities, entity]);
    }

    /**
     * TODO: Description of method {@code updateEntity}.
     *
     */
    public updateEntity(entity: Model): void {
        console.log("Calling State updateEntity...");
        const entities = this.currentPageEntities$.getValue();
        const entityIndex = entities.findIndex(entity => entity.primaryKey === this.entityUpdating.primaryKey);
        entities[entityIndex] = entity;
        this.currentPageEntities$.next([...entities]);
    }

    /**
     * TODO: Description of method {@code deleteEntity}.
     *
     */
    public deleteEntity(entity: Model): void {
        console.log("Calling State deleteEntity...");
        this.setCurrentPageEntitiesQuantity(this.currentPageEntitiesQuantity$.getValue() - 1);
        this.setTotalEntitiesQuantity(this.totalEntitiesQuantity$.getValue() - 1);
        const currentEntities = this.currentPageEntities$.getValue();
        this.currentPageEntities$.next(
            currentEntities.filter(entity => entity.primaryKey !== this.entityRemoving.primaryKey)
        );
    }

}
