import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/components/login.component";
import {LoginService} from "./login.service";
import {LoginPage} from "./login/pages/login.page";
import {routing} from "./login.routing";
import {SharedModule} from "../shared/shared.module";
@NgModule({
  imports: [
    SharedModule.forRoot(),
    routing
  ],
  declarations: [
    LoginComponent,
    LoginPage
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {

}
