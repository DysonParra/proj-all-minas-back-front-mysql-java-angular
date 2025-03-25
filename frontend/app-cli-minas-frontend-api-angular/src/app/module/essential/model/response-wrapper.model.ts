/*
 * @fileoverview    {ResponseWrapper}
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
import { HttpHeaders } from '@angular/common/http';
import { GenericViewModel } from './generic.model';

/**
 * TODO: Description of {@code ResponseWrapper}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
export class ResponseWrapper<Model extends GenericViewModel<any>> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        public headers: HttpHeaders,
        public entities: Model[]) {

    }

}
