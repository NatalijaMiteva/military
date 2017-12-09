import {Routes, RouterModule} from "@angular/router";
import {UsersComponent} from "./components/users.component";
import {ModuleWithProviders} from "@angular/core";
export const routes : Routes = [{
  path: '',
  component : UsersComponent
}];

export const routing : ModuleWithProviders = RouterModule.forChild(routes);
