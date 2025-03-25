/*
 * @fileoverview    {LowerCaseUrlSerializer}
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
import { DefaultUrlSerializer, UrlTree } from '@angular/router';

/**
 * TODO: Description of {@code LowerCaseUrlSerializer}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root',
})
export class LowerCaseUrlSerializer extends DefaultUrlSerializer {

    /**
     * TODO: Description of method {@code parse}.
     *
     */
    public override parse(url: string): UrlTree {
        return super.parse(url.toLowerCase());
    }

}
