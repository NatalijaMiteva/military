import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthenticationService} from "../authentication/services/authentication.service";

/**
 * This guard requires for a user to have a ADMIN role
 */
@Injectable()
export class AdministratorAuthenticationGuard implements CanActivate, CanActivateChild {
  private readonly REQUIRED_ROLE = 'ADMIN';

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.canActivateCheck();
  }

  canActivateChild(): Observable<boolean> {
    return this.canActivateCheck();
  }

  private canActivateCheck() {
    return this.authenticationService.loggedUserHasAuthority(this.REQUIRED_ROLE).map(hasAuthority => {
      if (!hasAuthority) {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
      }
      return hasAuthority;
    });
  }
}
