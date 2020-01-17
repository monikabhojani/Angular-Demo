import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CanactivatechildGuard implements CanActivateChild {
  constructor(private user:UserService, private router:Router){

  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.user.givePermission()){
        return true;
      }
      else{
        alert("You don't have permition to view this page....");
        this.router.navigate(['/home']);
        return false;
      }
  }
  
}
