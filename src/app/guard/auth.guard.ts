import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { role } from '../dao/role';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(route.data);
    return this.checkUserRole(route);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  checkUserRole(route: ActivatedRouteSnapshot): boolean {
    const allowedRole: role[] = route.data.role;

    console.log('this.userService.role', this.userService.role);
    if (this.userService.role === null) {
      console.log(this.userService.role);
      // this.router.navigate(['/']);
      return false;
    }

    if (allowedRole.includes(this.userService.role)) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }

}
