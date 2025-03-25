/*
 * @fileoverview    {GenericContainerComponent}
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
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppInjector } from '@app/app-injector';

import { GenericViewModel } from '../model/generic.model';
import { GenericFacade } from '../facade/generic.facade';

import notify from 'devextreme/ui/notify';

/**
 * TODO: Description of {@code GenericContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    template: '',
    standalone: false
})
export abstract class GenericContainerComponent<Model extends GenericViewModel<any>> implements OnInit, OnDestroy {

    public eventSubscriptions: Array<Subscription> = [];

    public entityCollection: Model[] = [];
    public entityQuantity = 0;
    public pageNumber: number = 1;
    public pageSize: number = 20;
    public lastSearch: string = "";
    public currentSearch: string = "";
    public startAddOrEdit: any = undefined;

    public loadingVisible = true;
    public loadingMessage = "Loading...";

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    protected constructor(
        protected entityInstance: GenericViewModel<any>,
        protected entityFacade: GenericFacade<Model>) {
        const injector = AppInjector.getInstance().getInjector();
    }

    /**
     * TODO: Description of method {@code ngOnInit}.
     *
     */
    public ngOnInit(): void {
        this.loadingVisible = true;
        this.eventSubscriptions.push(
            this.entityFacade.getCurrentPageEntities()
                .subscribe((res) => {
                    console.log("Calling Container getCurrentPageEntities...");
                    this.entityCollection = res;
                    if (undefined === this.entityCollection) {
                        this.entityCollection = null as any;
                        this.loadingVisible = false;
                        notify("Error getting data", 'error', 3000);
                    } else if (null !== this.entityCollection) {
                        this.loadingVisible = false;
                    }
                })
        );

        this.eventSubscriptions.push(this.entityFacade.getTotalEntitiesQuantity()
            .subscribe((resp) => {
                this.entityQuantity = resp;
            })
        );

        this.updateEntityCollection()
    }

    /**
     * TODO: Description of method {@code ngOnDestroy}.
     *
     */
    public ngOnDestroy(): void {
        this.eventSubscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }

    /**
     * TODO: Description of method {@code removeSubscription}.
     *
     */
    public removeSubscription(subscription: Subscription): void {
        let index: number = this.eventSubscriptions.indexOf(subscription);
        index != -1 ? this.eventSubscriptions[index].unsubscribe() : undefined;
        index != -1 ? this.eventSubscriptions.splice(index, 1) : undefined;
    }

    /**
     * TODO: Description of method {@code updateEntityCollection}.
     *
     */
    public updateEntityCollection(): void {
        this.cancellInitOrStartEditingRow();
        this.loadingVisible = true;
        let getEntitiesSubscription: Subscription;
        if (this.currentSearch === "") {
            getEntitiesSubscription = this.entityFacade
                .getAllEntitiesPagedWithHeaders(this.pageSize, this.pageNumber)
                .subscribe({
                    complete: () => this.removeSubscription(getEntitiesSubscription)
                });
        } else {
            getEntitiesSubscription = this.entityFacade
                .searchEntitiesPagedWithHeaders(this.currentSearch, this.pageSize, this.pageNumber)
                .subscribe({
                    complete: () => this.removeSubscription(getEntitiesSubscription)
                });
        }
        this.eventSubscriptions.push(getEntitiesSubscription);
    }

    /**
     * TODO: Description of method {@code onSearch}.
     *
     */
    public onSearch(search: any): void {
        this.lastSearch = this.currentSearch;
        this.currentSearch = search.value;
        if (this.lastSearch !== this.currentSearch) {
            this.pageNumber = 1;
            this.updateEntityCollection();
        }
    }

    /**
     * TODO: Description of method {@code onPageChanged}.
     *
     */
    public onPageChanged(page: any): void {
        this.pageSize = page.pageSize;
        this.pageNumber = page.pageNumber;
        this.updateEntityCollection();
    }

    /**
     * TODO: Description of method {@code onStartRowInserting}.
     *
     */
    public onStartRowInserting(event: any): void {
        //console.log("onStartRowInserting");
        this.startAddOrEdit = event;
    }

    /**
     * TODO: Description of method {@code onStartRowUpdating}.
     *
     */
    public onStartRowUpdating(event: any): void {
        //console.log("onStartRowUpdating");
        this.startAddOrEdit = event;
        this.entityFacade.setEntityUpdating(Object.assign(this.entityInstance.newEntity(), event.data));
    }

    /**
     * TODO: Description of method {@code onStartRowRemoving}.
     *
     */
    public onStartRowRemoving(event: any): void {
        //console.log("onStartRowRemoving");
        this.entityFacade.setEntityRemoving(Object.assign(this.entityInstance.newEntity(), event.data));
    }

    /**
     * TODO: Description of method {@code cancellInitOrStartEditingRow}.
     *
     */
    public cancellInitOrStartEditingRow(): void {
        //console.log("cancellInitOrStartEditingRow");
        if (this.startAddOrEdit != undefined) {
            const button = document.evaluate(
                "//div[contains(@class,'dx-widget dx-button') and @aria-label='Cancel']",
                document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null
            ).singleNodeValue;
            if (button != undefined)
                (button as HTMLElement).click();
            this.startAddOrEdit = undefined;
        }
    }

    /**
     * TODO: Description of method {@code onRowInserted}.
     *
     */
    public onRowInserted(event: any): void {
        this.loadingVisible = true;
        let entity =  event.data;
        let saveEntitySubscription: Subscription;
        saveEntitySubscription = this.entityFacade
            .saveEntity(Object.assign(this.entityInstance.newEntity(), entity))
            .subscribe({
                next: (res) => {
                    console.log("Facade response:");
                    console.log(res);
                    if (res != undefined) {
                        //this.loadingVisible = false;
                        this.updateEntityCollection();
                        notify("Data saved successfully", 'success', 3000);
                    } else {
                        this.entityCollection = this.entityCollection.filter(
                            item => item.primaryKey !== entity.primaryKey
                        );
                        this.loadingVisible = false;
                        notify("Error saving data", 'error', 3000);
                    }
                },
                complete: () => this.removeSubscription(saveEntitySubscription)
            });
        this.eventSubscriptions.push(saveEntitySubscription);
    }

    /**
     * TODO: Description of method {@code onRowUpdated}.
     *
     */
    public onRowUpdated(event: any): void {
        this.loadingVisible = true;
        let entity = event.data;
        let updateEntitySubscription: Subscription;
        updateEntitySubscription = this.entityFacade.updateEntity(entity)
            .subscribe({
                next: (res) => {
                    console.log("Facade response:");
                    console.log(res);
                    if (res != undefined) {
                        this.loadingVisible = false;
                        //this.updateEntityCollection();
                        notify("Data updated successfully", 'success', 3000);
                    } else {
                        this.entityCollection = [
                            ...this.entityCollection.filter(
                                item => item.primaryKey !== entity.primaryKey
                            ), this.entityFacade.getEntityUpdating()
                        ].sort((a, b) => a.primaryKey - b.primaryKey);
                        this.loadingVisible = false;
                        notify("Error updating data", 'error', 3000);
                    }
                },
                complete: () => this.removeSubscription(updateEntitySubscription)
            });
        this.eventSubscriptions.push(updateEntitySubscription);
    }

    /**
     * TODO: Description of method {@code onRowRemoved}.
     *
     */
    public onRowRemoved(event: any): void {
        this.loadingVisible = true;
        let entity = event.data;
        let deleteEntitySubscription: Subscription;
        deleteEntitySubscription = this.entityFacade.deleteEntity(entity)
            .subscribe({
                next: (res) => {
                    console.log("Facade response:");
                    console.log(res);
                    if (res != undefined) {
                        //this.loadingVisible = false;
                        this.entityFacade.getCurrentPageEntitiesQuantity()
                            .subscribe((entitiesQuantity) => {
                                if (entitiesQuantity == 0)
                                    this.pageNumber = 1;
                            })
                            .unsubscribe();
                        this.updateEntityCollection();
                        notify("Data removed successfully", 'success', 3000);
                    } else {
                        this.entityCollection = [
                            ...this.entityCollection,
                            this.entityFacade.getEntityRemoving()
                        ].sort((a, b) => a.primaryKey - b.primaryKey);;
                        this.loadingVisible = false;
                        notify("Error removing data", 'error', 3000);
                    }
                    this.entityFacade.setEntityRemoving(null as any);
                },
                complete: () => this.removeSubscription(deleteEntitySubscription)
            });
        this.eventSubscriptions.push(deleteEntitySubscription);
    }

}
