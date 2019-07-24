import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class AuthGuard implements CanActivate{

    constructor(private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(localStorage.getItem("currentUser"))
            return true;

        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }
    
}