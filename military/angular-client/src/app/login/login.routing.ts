import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LoginPage} from "./login/pages/login.page";
const routes: Routes = [
  {
    path : '',
    component : LoginPage
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
