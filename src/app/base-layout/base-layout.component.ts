/**
 * Title: base-layout.component.ts
 * Author: William Austin
 * Date: 16 September 2023
 * Description: Base Layout for GPA Calculator
 */

import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})

export class BaseLayoutComponent {

  assignment: string;

  constructor(private cookieService: CookieService, private router: Router){
    this.assignment = 'GPA Calculator'
  }

  signOut(){
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }
}
