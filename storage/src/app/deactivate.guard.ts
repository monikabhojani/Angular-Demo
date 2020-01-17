import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LogoutComponent } from './logout/logout.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<LogoutComponent> {
  canDeactivate(): boolean {
    // return true;
    return window.confirm("Are you sure?");
  }  
}
