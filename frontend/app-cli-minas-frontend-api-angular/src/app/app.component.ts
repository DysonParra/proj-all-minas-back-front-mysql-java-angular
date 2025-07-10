/*
 * @overview        {AppComponent}
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
import { ChangeDetectorRef, Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {
    NavigationCancel,
    NavigationEnd,
    NavigationError,
    NavigationStart,
    Router,
    RouterEvent
} from '@angular/router';

/**
 * TODO: Description of {@code AppComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

    public loading = false;
    public loadingDataStarted: Subscription;
    public loadingDataComplete: Subscription;
    public routingComplete: Subscription;
    public lastItemClicked: EventTarget;

    /**
     * TODO: Description of method {@code beforeUnloadHander}.
     *
     */
    @HostListener('click', ['$event'])
    public onclickHander(event: Event): any {
        if (event.target) {
            this.lastItemClicked = event.target;
            return true;
        }
    }

    /**
     * TODO: Description of method {@code beforeUnloadHander}.
     *
     */
    @HostListener('window:beforeunload', ['$event'])
    public beforeUnloadHander(event: any): any {
        return false;
    }

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        private router: Router,
        private changeDetectorRef: ChangeDetectorRef) {

    }

    /**
     * TODO: Description of method {@code ngOnInit}.
     *
     */
    public ngOnInit(): void {
        this.router.events.subscribe((event: any) => {
            this.handleNavigationEvent(event as RouterEvent);
        });
    }

    /**
     * TODO: Description of method {@code handleNavigationEvent}.
     *
     */
    private handleNavigationEvent(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.showSpinner();
        } else if (event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError) {
            if (event instanceof NavigationEnd) {
                window.scrollTo(0, 0);
            }
            this.hideSpinner();
        }
    }

    /**
     * TODO: Description of method {@code showSpinner}.
     *
     */
    private showSpinner(): void {
        if (!this.loading) {
            this.loading = true;
            this.changeDetectorRef.detectChanges();
        }
    }

    /**
     * TODO: Description of method {@code hideSpinner}.
     *
     */
    private hideSpinner(): void {
        if (this.loading) {
            this.loading = false;
            this.changeDetectorRef.detectChanges();
        }
    }

    /**
     * TODO: Description of method {@code ngOnDestroy}.
     *
     */
    public ngOnDestroy(): void {

    }

    /**
     * TODO: Description of method {@code isInLogin}.
     *
     */
    public isInLogin(): boolean {
        return (this.router.url.includes('login') || this.router.url.includes('register'));
    }

}
