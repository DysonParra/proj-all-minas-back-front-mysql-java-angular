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
 * TODO: Description of {@code NotNull}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
export function NotNull(target: any, propertyKey: string): void {

    // Get the existing getter if exists
    const existingGetter = Object.getOwnPropertyDescriptor(target, 'notNullFields')?.get;

    // Define the notNullFields getter and based on the property marked with @NotNull
    const getter = function (this: any): FieldViewModel[] {
        return [{
            "name": propertyKey,
            "value": this[propertyKey]
        }];
    };

    // Combine the result of exising getter and the new defined
    const combinedGetter = function (this: any): FieldViewModel[] {
        if (existingGetter)
            return [...existingGetter.call(this), ...getter.call(this)];
        return getter.call(this);
    };

    // Define the notNullFields getter based on the property marked with @NotNull
    Object.defineProperty(target, 'notNullFields', {
        get: combinedGetter,
        enumerable: true,
        configurable: true
    });

}
