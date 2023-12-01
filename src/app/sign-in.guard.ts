/**
 * Title: sign-in-guard.ts
 * Author: John Davidson
 * Date: 30 November 2023
 * Description: Sign in guard
 */

// Necessary modules and services.
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  // Inject required services using the constructor.
  constructor(private router: Router, private cookieService: CookieService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // Retrieve the session_user cookie.
      const sessionUser = this.cookieService.get('session_user');

      // Check if a session_user exists.
      if (sessionUser) {
        // Allow navigation if the user is authenticated.
        return true;
      } else {
        // Redirect to the sign-in page if the user is not authenticated.
        this.router.navigate(['/session/sign-in']);
        return false;
      }
  }
}
