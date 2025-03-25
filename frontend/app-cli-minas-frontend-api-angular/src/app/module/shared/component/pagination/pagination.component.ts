/*
 * @fileoverview    {PaginationComponent}
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
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

/**
 * TODO: Description of {@code PaginationComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    standalone: false,
    styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

    @Input()
    public items: Array<any> = [];
    @Input()
    public rowQuantity = 0;
    @Input()
    public pageSizes: number[] = [5, 10, 20, 50, 100, 200, 500];
    @Output()
    public onPageChanged = new EventEmitter<any>(true);
    public initialPage = 0;
    public currentPage = 0;
    public pageSize = 20;
    public pageQuantity = 0;

    /**
     * TODO: Description of method {@code ngOnInit}.
     *
     */
    public ngOnInit(): void {

    }

    /**
     * TODO: Description of method {@code ngOnChanges}.
     *
     */
    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['rowQuantity'] != undefined && changes['rowQuantity'].currentValue !== changes['rowQuantity'].previousValue) {
            console.log("Page quantity changed...");
            this.updatePageQuantity();
            if (this.rowQuantity == 0) {
                this.currentPage = 0;
            }
            else {
                this.currentPage = 1;
            }
        }
    }

    /**
     * TODO: Description of method {@code updatePageQuantity}.
     *
     */
    public updatePageQuantity(): void {
        this.pageQuantity = Math.ceil(this.rowQuantity / this.pageSize);
    }

    /**
     * TODO: Description of method {@code setPageNumber}.
     *
     */
    public setPageNumber(pageNumber: any): void {
        if (pageNumber < 1 || pageNumber > this.pageQuantity)
            return;

        this.currentPage = pageNumber;
        if (this.currentPage == this.pageQuantity) {
            this.onPageChanged.emit({ pageNumber: this.currentPage, pageSize: this.pageSize, pageQuantity: this.pageQuantity });
        } else {
            this.onPageChanged.emit({ pageNumber: this.currentPage, pageSize: this.pageSize, pageQuantity: this.pageQuantity });
        }
    }

    /**
     * TODO: Description of method {@code setPageSize}.
     *
     */
    public setPageSize(pageSize: any): void {
        this.pageSize = pageSize;
        this.currentPage = 1;
        this.updatePageQuantity();
        this.onPageChanged.emit({ pageNumber: this.currentPage, pageSize: this.pageSize, pageQuantity: this.pageQuantity });
    }

}
