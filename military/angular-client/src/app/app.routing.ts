import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {LoginPage} from "./login/login/pages/login.page";


const appRoutes: Routes = [
  {
    path : '',
    children: [
      {
        path: '',
        loadChildren : './login/login.module#LoginModule'
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

