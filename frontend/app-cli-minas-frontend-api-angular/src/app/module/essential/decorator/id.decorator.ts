/*
 * @fileoverview    {FileName}
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
import { FieldViewModel } from "../model/field.model";

/**
 * TODO: Description of {@code Id}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
export function Id(target: any, propertyKey: string): void {

    const getter = function (this: any): FieldViewModel {
        return this[propertyKey];
    };

    const setter = function (this: any, value: any): void {
        this[propertyKey] = value;
    };

    const getterName = function (this: any): string {
        return propertyKey;
    };

    // Define the primaryKey getter and setter based on the property marked with @Id
    Object.defineProperty(target, 'primaryKey', {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });

    // Define the primaryKeyName getter based on the property marked with @Id
    Object.defineProperty(target, 'primaryKeyName', {
        get: getterName,
        enumerable: true,
        configurable: true
    });

}
