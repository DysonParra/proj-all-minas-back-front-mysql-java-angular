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
import { TemporalType } from "./temporal-type.model";

/**
 * TODO: Description of {@code FieldViewModel}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
export type FieldViewModel = {

    name: string;
    value: any;
    primaryKey?: boolean;
    date?: TemporalType;
    notNull?: boolean;
    hidden?: boolean;

};
