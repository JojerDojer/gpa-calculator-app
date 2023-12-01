/**
 * Title: base-layout.component.ts
 * Author: John Davidson
 * Date: 25 November 2023
 * Description: Base-layout component
 */

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string; // Property to store the assignment name.

  constructor(private cookieService: CookieService, private router: Router) {
    // Initialize the assignment property with a default value.
    this.assignment = 'GPA Calculator';
  }


  ngOnInit(): void {
  }

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

}
