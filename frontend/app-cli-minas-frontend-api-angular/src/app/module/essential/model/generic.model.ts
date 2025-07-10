/*
 * @overview        {GenericViewModel}
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
import { Injectable } from "@angular/core";
import { FieldViewModel } from "./field.model";

/**
 * TODO: Description of {@code GenericViewModel}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export abstract class GenericViewModel<Key> {

    /**
     * TODO: Description of method {@code primaryKey}.
     *
     */
    public get primaryKey(): Key {
        return this.primaryKey;
    }

    /**
     * TODO: Description of method {@code primaryKey}.
     *
     */
    public set primaryKey(key: Key) {
        this.primaryKey = key;
    }

    /**
     * TODO: Description of method {@code primaryKeyName}.
     *
     */
    public get primaryKeyName(): string {
        return `${this.primaryKey}`;
    }

    /**
     * TODO: Description of method {@code allFields}.
     *
     */
    public get allFields(): FieldViewModel[] {
        let fields: FieldViewModel[] = [];
        let properties = Object.getOwnPropertyDescriptors(this);
        for (let p in properties) {
            fields = [
                ...fields, {
                    "name": p,
                    "value": properties[p].value,
                    "date": this.dateFields.find(i => i.name == p)?.date ?? undefined,
                    "primaryKey": this.primaryKeyName !== p ? false: true,
                    "notNull": this.notNullFields.find(i => i.name == p) == undefined ? false: true,
                    "hidden": this.hiddenFields.find(i => i.name == p) == undefined ? false: true,
                }
            ];
        }
        return fields;
    }

    /**
     * TODO: Description of method {@code dateFields}.
     *
     */
    public get dateFields(): FieldViewModel[] {
        return [];
    }

    /**
     * TODO: Description of method {@code notNullFields}.
     *
     */
    public get notNullFields(): FieldViewModel[] {
        return [];
    }

    /**
     * TODO: Description of method {@code hiddenFields}.
     *
     */
    public get hiddenFields(): FieldViewModel[] {
        return [];
    }

    /**
     * TODO: Description of method {@code allFieldsButPrimaryKey}.
     *
     */
    public get allFieldsButPrimaryKey(): FieldViewModel[] {
        let fields: FieldViewModel[] = [];
        fields = this.allFields
            .filter(item => this.primaryKeyName !== item.name)
        return fields;
    }

    /**
     * TODO: Description of method {@code nonDecoratedFields}.
     *
     */
    public get nonDecoratedFields(): FieldViewModel[] {
        let fields: FieldViewModel[] = [];
        fields = this.allFields
            .filter(item => this.primaryKeyName !== item.name)
            .filter(item => this.dateFields.length === 0 ||
                this.dateFields.every(date => date.name !== item.name)
            )
            .filter(item => this.notNullFields.length === 0 ||
                this.notNullFields.every(date => date.name !== item.name)
            )
            .filter(item => this.hiddenFields.length === 0 ||
                this.hiddenFields.every(date => date.name !== item.name)
            );
        return fields;
    }

    /**
     * TODO: Description of method {@code newEntity}.
     *
     */
    public abstract newEntity(): GenericViewModel<Key>;

}
