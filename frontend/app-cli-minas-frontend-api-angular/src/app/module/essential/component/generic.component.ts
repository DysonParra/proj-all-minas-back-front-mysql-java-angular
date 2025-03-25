/*
 * @fileoverview    {GenericComponent}
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
import { Component, EventEmitter, Output, OnInit, OnDestroy, Input } from '@angular/core';
import { formatDate } from '@angular/common';
import { Subscription } from 'rxjs';
import { AppInjector } from '@app/app-injector';

import { FieldViewModel } from "../model/field.model";
import { GenericViewModel } from '../model/generic.model';
import { TemporalType } from '../model/temporal-type.model';

/**
 * TODO: Description of {@code GenericComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    template: '',
    standalone: false
})
export abstract class GenericComponent<Model extends GenericViewModel<any>> implements OnInit, OnDestroy {

    @Output()
    public onSearch: EventEmitter<any> = new EventEmitter<any>(true);
    @Output()
    public onStartRowInserting: EventEmitter<any> = new EventEmitter<any>(true);
    @Output()
    public onStartRowUpdating: EventEmitter<any> = new EventEmitter<any>(true);
    @Output()
    public onStartRowRemoving: EventEmitter<any> = new EventEmitter<any>(true);
    @Output()
    public onRowInserted: EventEmitter<any> = new EventEmitter<any>(true);
    @Output()
    public onRowUpdated: EventEmitter<any> = new EventEmitter<any>(true);
    @Output()
    public onRowRemoved: EventEmitter<any> = new EventEmitter<any>(true);

    @Input()
    public loadingVisible = true;
    @Input()
    public loadingMessage = "Loading...";

    @Input()
    public entityCollection: Model[] = [];
    public entityPrimaryKeyName = "";
    public entityAllFields: FieldViewModel[] = [];
    public entityAllFieldsButPrimaryKey: FieldViewModel[] = [];
    public entityDateFields: FieldViewModel[] = [];
    public entityNotNullFields: FieldViewModel[] = [];
    public entityHidenFields: FieldViewModel[] = [];
    public TemporalType = TemporalType;

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    protected constructor(protected entityInstance: GenericViewModel<any>) {
        const injector = AppInjector.getInstance().getInjector();
        this.entityPrimaryKeyName = this.entityInstance.primaryKeyName;
        this.entityAllFields = this.entityInstance.allFields;
        this.entityAllFieldsButPrimaryKey = this.entityInstance.allFieldsButPrimaryKey;
        this.entityDateFields = this.entityInstance.dateFields;
        this.entityNotNullFields = this.entityInstance.notNullFields;
        this.entityHidenFields = this.entityInstance.hiddenFields;
        //console.log("Entites");
        //console.log(this.entityAllFields);
    }

    /**
     * TODO: Description of method {@code ngOnInit}.
     *
     */
    public ngOnInit(): void {

    }

    /**
     * TODO: Description of method {@code ngOnDestroy}.
     *
     */
    public ngOnDestroy(): void {

    }

    /**
     * TODO: Description of method {@code rowValidating}.
     *
     */
    public rowValidating(e: any): boolean {
        return true;
    }

    /**
     * TODO: Description of method {@code editorPreparing}.
     *
     */
    public editorPreparing(e: any): void {
        if (e.parentType === "dataRow" && e.dataField === "Position") {
            e.editorOptions.readOnly = false;
        }
        else if (e.parentType === "searchPanel") {
            e.editorOptions.onValueChanged = undefined;
            e.editorOptions.onEnterKey = (function (this: any, arg: any) {
                this.onSearch.emit({ value: arg.component.option("value") });
            }).bind(this);
        }
    }

    /**
     * TODO: Description of method {@code onSelectionChanged}.
     *
     */
    public onSelectionChanged(selectedRowKeys: any, cellInfo: any, dropDownBoxComponent: any): void {
        //console.log(selectedRowKeys);
        //console.log(cellInfo);
        if (selectedRowKeys == null)
            cellInfo.setValue(null);
        else if (selectedRowKeys.length > 0) {
            cellInfo.setValue(selectedRowKeys[0]);
            dropDownBoxComponent.close();
        }
        else if (selectedRowKeys.length == 0 && cellInfo.value === null)
            cellInfo.setValue(null);
        //console.log(cellInfo);
    }

    /**
     * TODO: Description of method {@code allowDeleting}.
     *
     */
    public allowDeleting(e: any): boolean {
        return true;
    }

    /**
     * TODO: Description of method {@code allowAdding}.
     *
     */
    public allowAdding(e: any): boolean {
        return true;
    }

    /**
     * TODO: Description of method {@code allowUpdating}.
     *
     */
    public allowUpdating(e: any): boolean {
        return true;
    }

    /**
     * TODO: Description of method {@code initNewRow}.
     *
     */
    public initNewRow(event: any): void {
        //console.log("initNewRow");
        //console.log(event);
        this.onStartRowInserting.emit(event);
    }

    /**
     * TODO: Description of method {@code editingStart}.
     *
     */
    public editingStart(event: any): void {
        //console.log("editingStart");
        //console.log(event.data);
        this.onStartRowUpdating.emit(event);
    }

    /**
     * TODO: Description of method {@code rowInserting}.
     *
     */
    public rowInserting(event: any): void {
        //console.log("rowInserting");
        //console.log(event.data);
    }

    /**
     * TODO: Description of method {@code rowInserted}.
     *
     */
    public rowInserted(event: any): void {
        this.onInsertingUpdating(event);
        //console.log("rowInserted");
        //console.log(event.data);
        this.onRowInserted.emit(event);
    }

    /**
     * TODO: Description of method {@code rowUpdating}.
     *
     */
    public rowUpdating(event: any): void {
        //console.log("rowUpdating");
        //console.log(event.data);
    }

    /**
     * TODO: Description of method {@code rowUpdated}.
     *
     */
    public rowUpdated(event: any): void {
        this.onInsertingUpdating(event);
        //console.log("rowUpdated");
        //console.log(event.data);
        this.onRowUpdated.emit(event);
    }

    /**
     * TODO: Description of method {@code rowRemoving}.
     *
     */
    public rowRemoving(event: any): void {
        //console.log("rowRemoving");
        //console.log(event.data);
        this.onStartRowRemoving.emit(event);
    }

    /**
     * TODO: Description of method {@code rowRemoved}.
     *
     */
    public rowRemoved(event: any): void {
        //console.log("rowRemoved");
        //console.log(event.data);
        this.onRowRemoved.emit(event);
    }

    /**
     * TODO: Description of method {@code formatDates}.
     *
     */
    public formatDates(event: any): void {
        for (let i in this.entityDateFields) {
            let dateField = this.entityDateFields[i].name;
            if (event.data[dateField] != null) {
                if (this.entityDateFields[i].date == TemporalType.TIME)
                    event.data[dateField] = `2000-01-01 ${event.data[dateField]}`;
                else
                    event.data[dateField] = formatDate(event.data[dateField], 'yyyy-MM-dd HH:mm:ss', 'en_US');
            }
        }
    }

    /**
     * TODO: Description of method {@code onInsertingUpdating}.
     *
     */
    public onInsertingUpdating(event: any): void {
        this.formatDates(event);
    }

    /**
     * TODO: Description of method {@code validateId}.
     *
     */
    public validateId(e: any): boolean {
        return e.value != null && e.value !== 0;
    }

}
