import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ApiService} from "./app.service";
import {AdministratorAuthenticationGuard} from "./guards/administrator-authentication-guard.service";
import {AppConfigOptions} from "./app.config.options";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpModule} from "@angular/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {routing} from "./app.routing";
import {LoginModule} from "./login/login.module";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {AuthenticationModule} from "./authentication/authentication.module";

export function defaultOptions(): AppConfigOptions {
  return {
    appTitle: 'Military',
    openSidenavStyle: 'side',
    closedSidenavStyle: 'side'
  };
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routing,
    CommonModule,
    FlexLayoutModule,
    // NavigationModule,
    TranslateModule,
    RouterModule,
    AuthenticationModule,
    // DataTableModule,
    // PagingModule,
    // Md2Module,
    // SelectModule
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MaterialModule
  ],
  providers: [
    ApiService,
    AdministratorAuthenticationGuard
  ],
  exports : [
    FormsModule,
    CommonModule,
    FlexLayoutModule,
    TranslateModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
