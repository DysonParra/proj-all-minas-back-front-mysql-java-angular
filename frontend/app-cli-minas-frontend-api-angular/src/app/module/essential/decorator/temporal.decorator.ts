/*
 * @overview        {FileName}
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
import { TemporalType } from "../model/temporal-type.model";

/**
 * TODO: Description of {@code Temporal}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
export function Temporal(type: TemporalType): any {

    return function(target: any, propertyKey: string): any {
        // Get the existing getter if exists
        const existingGetter = Object.getOwnPropertyDescriptor(target, 'dateFields')?.get;

        // Define the dateFields getter and based on the property marked with @Temporal
        const getter = function (this: any): FieldViewModel[] {
            return [{
                "name": propertyKey,
                "value": this[propertyKey],
                "date": type
            }];
        };

        // Combine the result of exising getter and the new defined
        const combinedGetter = function (this: any): FieldViewModel[] {
            if (existingGetter)
                return [...existingGetter.call(this), ...getter.call(this)];
            return getter.call(this);
        };

        // Define the dateFields getter based on the property marked with @Temporal
        Object.defineProperty(target, 'dateFields', {
            get: combinedGetter,
            enumerable: true,
            configurable: true
        });
    }

}
