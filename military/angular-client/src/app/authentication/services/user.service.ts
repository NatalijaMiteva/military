import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import {HOME_PAGES} from "../../navigation/home-pages-setup";

@Injectable()
export class UserService {
  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  // try to go the the user home page based on his authority
  // if there's no defined home page for any of the user authorities, go to the index page
  goToHomePage() {
    this.authenticationService.getUser().subscribe(user => {
      for (const authority of user.authorities) {
        const homePage = HOME_PAGES.get(authority);
        if (homePage) {
          this.router.navigate([homePage]);
          return;
        }
      }

      this.router.navigate(['']);
    });
  }
}
