import {Component} from "@angular/core";
import {LoginService} from "../../login.service";
import {AuthenticationService} from "../../../authentication/services/authentication.service";
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userCredentials: {
    username: string,
    password: string,
  }

  constructor(private service: LoginService,
              private authenticationService : AuthenticationService) {
  }

  login(event): void {
    this.authenticationService.login(this.userCredentials)
      .subscribe(response => {
        this.authenticationService.getUser()
          .subscribe(user => {
              // const route = HOME_PAGES.get(user.type);
              // this.router.navigate([route]);
            }, this.handleError
          );
      }, this.handleError);
  }

  private handleError = err => {
    console.log("error")
    // this.notificationService.error(err.message || err.error_description);
  }

}
