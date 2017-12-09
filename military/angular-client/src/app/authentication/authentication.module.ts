import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { TokenService } from './services/token.service';
import { AuthenticationService } from './services/authentication.service';
import { FormsModule } from '@angular/forms';
import { AccountService } from './services/account.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module/material.module';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthHttpInterceptor } from './services/auth-http-interceptor.service';
import { TranslateModule } from '@ngx-translate/core';
import {LoginComponent} from "../login/login/components/login.component";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    TranslateModule
  ],
  entryComponents: [],
  providers: [
    AuthenticationService,
    TokenService,
    AccountService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    }
  ]
})
export class AuthenticationModule {

}
