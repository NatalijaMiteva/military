import {NgModule} from "@angular/core";
import {UsersComponent} from "./components/users.component";
import {UsersService} from "./user.service";
import {routes} from "./users.router";
import {UsersPage} from "./pages/users.page";
@NgModule({
  imports: [
    routes
  ],
  providers :[
    UsersService
  ],
  declarations : [
    UsersComponent,
    UsersPage
  ]
})
export class UsersModule{}
