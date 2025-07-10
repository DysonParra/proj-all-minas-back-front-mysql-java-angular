/*
 * @overview        {GenericService}
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
import { delay, map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AppInjector } from '@app/app-injector';

import { GenericViewModel } from '../model/generic.model';
import { ResponseWrapper } from '../model/response-wrapper.model';

/**
 * TODO: Description of {@code GenericService}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export abstract class GenericService<Model extends GenericViewModel<any>> {

    protected http: HttpClient;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    protected constructor(protected entityInstance: Model) {
        // Manually retrieve the dependencies from the injector
        const injector = AppInjector.getInstance().getInjector();
        this.http = injector.get(HttpClient);
    }

    public pagesUrl: string = `pages`;
    public searchUrl: string = `search`;

    /**
     * TODO: Description of method {@code dtoList}.
     *
     */
    public abstract get dtoList(): string;

    /**
     * TODO: Description of method {@code apiUrl}.
     *
     */
    public abstract get apiUrl(): string;

    /**
     * TODO: Description of method {@code convertResponse}.
     *
     */
    protected convertResponse(res: HttpResponse<any>): ResponseWrapper<Model> {
        const jsonResponse = (res.body._embedded !== undefined) ? res.body._embedded[this.dtoList] : [];
        const entities = [];
        if (jsonResponse != null)
            for (let i = 0; i < jsonResponse.length; i++)
                entities.push(Object.assign(this.entityInstance.newEntity(), jsonResponse[i]));

        return new ResponseWrapper(res.headers, entities);
    }

    /**
     * TODO: Description of method {@code getWithHeaders}.
     *
     */
    public getWithHeaders(url: string): Observable<ResponseWrapper<Model>> {
        return new Observable((observer) => {
            this.http.get(url, { observe: 'response' })
                .pipe(delay(1000))
                .toPromise()
                .then((res: any) => {
                    console.log("API response:");
                    console.log(res);
                    observer.next(this.convertResponse(res));
                    observer.complete();
                }, (err: any) => {
                    console.log("HTTP Error", err);
                    observer.next(undefined);
                    observer.complete();
                });
        });
    }

    /**
     * TODO: Description of method {@code get}.
     *
     */
    public get(url: string): Observable<Model[]> {
        return this.getWithHeaders(url).pipe(
            map((responseWrapper: ResponseWrapper<Model>) => {
                return responseWrapper.entities;
            })
        );
    }

    /**
     * TODO: Description of method {@code post}.
     *
     */
    public post(url: string, body: any): Observable<Model> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        return new Observable((observer) => {
            this.http.post(url, body, { headers: headers, observe: 'response' })
                .pipe(delay(1000))
                .toPromise()
                .then((res: any) => {
                    console.log("API response:");
                    console.log(res);
                    observer.next(res);
                    observer.complete();
                }, (err: any) => {
                    console.log("HTTP Error", err);
                    observer.next(undefined);
                    observer.complete();
                });
            });
    }

    /**
     * TODO: Description of method {@code put}.
     *
     */
    public put(url: string, body: any): Observable<Model> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        return new Observable((observer) => {
            this.http.put(url, body, { headers: headers, observe: 'response' })
                .pipe(delay(1000))
                .toPromise()
                .then((res: any) => {
                    console.log("API response:");
                    console.log(res);
                    observer.next(res);
                    observer.complete();
                }, (err: any) => {
                    console.log("HTTP Error", err);
                    observer.next(undefined);
                    observer.complete();
                });
        });
    }

    /**
     * TODO: Description of method {@code delete}.
     *
     */
    public delete(url: string): Observable<boolean> {
        return new Observable((observer) => {
            this.http.delete<any>(url, { observe: 'response' })
                .pipe(delay(1000))
                .toPromise()
                .then((res: any) => {
                    console.log("API response:");
                    console.log(res);
                    observer.next(true);
                    observer.complete();
                }, (err: any) => {
                    console.log("HTTP Error", err);
                    observer.next(undefined);
                    observer.complete();
                });
        });
    }

    /**
     * TODO: Description of method {@code getAllEntities}.
     *
     */
    public getAllEntities(): Observable<Model[]> {
        console.log("Calling Service getAllEntities...");
        const url: string = `${this.apiUrl}`;
        return this.get(url);
    }

    /**
     * TODO: Description of method {@code getAllEntitiesPaged}.
     *
     */
    public getAllEntitiesPaged(size: number, page: number): Observable<Model[]> {
        console.log("Calling Service getAllEntitiesPaged...");
        const url: string = `${this.apiUrl}/${this.pagesUrl}?page=${page - 1}&size=${size}`;
        return this.get(url);
    }

    /**
     * TODO: Description of method {@code getAllEntitiesPagedWithHeaders}.
     *
     */
    public getAllEntitiesPagedWithHeaders(size: number, page: number): Observable<ResponseWrapper<Model>> {
        console.log("Calling Service getAllEntitiesPagedWithHeaders...");
        const url: string = `${this.apiUrl}/${this.pagesUrl}?page=${page - 1}&size=${size}`;
        return this.getWithHeaders(url);
    }

    /**
     * TODO: Description of method {@code searchEntities}.
     *
     */
    public searchEntities(currentSearch: string): Observable<Model[]> {
        console.log("Calling Service searchEntities...");
        const url: string = `${this.apiUrl}/${this.searchUrl}/${currentSearch}`;
        return this.get(url);
    }

    /**
     * TODO: Description of method {@code searchEntitiesPaged}.
     *
     */
    public searchEntitiesPaged(currentSearch: string, size: number, page: number): Observable<Model[]> {
        console.log("Calling Service searchEntitiesPaged...");
        const url: string = `${this.apiUrl}/${this.searchUrl}/${currentSearch}/${this.pagesUrl}?page=${page - 1}&size=${size}`;
        return this.get(url);
    }

    /**
     * TODO: Description of method {@code searchEntitiesPagedWithHeaders}.
     *
     */
    public searchEntitiesPagedWithHeaders(currentSearch: string, size: number, page: number): Observable<ResponseWrapper<Model>> {
        console.log("Calling Service searchEntitiesPagedWithHeaders...");
        const url: string = `${this.apiUrl}/${this.searchUrl}/${currentSearch}/${this.pagesUrl}?page=${page - 1}&size=${size}`;
        return this.getWithHeaders(url);
    }

    /**
     * TODO: Description of method {@code saveEntity}.
     *
     */
    public saveEntity(entity: Model): Observable<Model> {
        console.log("Calling Service saveEntity...");
        const url: string = `${this.apiUrl}`;
        return this.post(url, entity);
    }

    /**
     * TODO: Description of method {@code updateEntity}.
     *
     */
    public updateEntity(entity: Model): Observable<Model> {
        console.log("Calling Service updateEntity...");
        const url: string = `${this.apiUrl}/${entity.primaryKey}`;
        return this.put(url, entity);
    }

    /**
     * TODO: Description of method {@code deleteEntity}.
     *
     */
    public deleteEntity(entity: Model): Observable<boolean> {
        console.log("Calling Service deleteEntity...");
        const url: string = `${this.apiUrl}/${entity.primaryKey.toString()}`;
        return this.delete(url);
    }

}
