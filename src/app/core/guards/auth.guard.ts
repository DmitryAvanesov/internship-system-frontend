import { Injectable } from '@angular/core'
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { isUserLoggedIn, selectUserRoles } from '@store/auth/auth.selectors'
import { map } from 'rxjs/operators'
import { RolesEnum } from '@core/enums/roles.enum'

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanLoad {
    private isLoggedIn$ = this.store.select(isUserLoggedIn)
    private roles$ = this.store.select(selectUserRoles)

    canLoad(
        route: Route,
        segments: UrlSegment[]
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        const necessaryRoutes: RolesEnum[] = route.data.roles
        return (
            this.isLoggedIn$ &&
            this.roles$.pipe(
                map((roles) => {
                    return necessaryRoutes.every((role) => roles.includes(role))
                })
            )
        )
    }

    constructor(private store: Store) {}
}
