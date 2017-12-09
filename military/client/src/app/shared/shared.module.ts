import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material-module/material.module';
import {RouterModule} from "@angular/router";
import {TranslateModule} from "../../../../angular-client/node_modules/@ngx-translate/core/index";

@NgModule({
  declarations: [
  ],
  exports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    // FlexLayoutModule,
    // NavigationModule,
    // DataTableModule,
    // PagingModule,
    // ConfirmDialogComponent,
    // TranslateModule,
    // SelectListComponent,
    // Md2Module,
    // SelectModule
  ],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    // FlexLayoutModule,
    // NavigationModule,
    // TranslateModule,
    RouterModule,
    // DataTableModule,
    // PagingModule,
    // Md2Module
    // SelectModule
  ],
  providers: [
  ],
  entryComponents: [
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
      ]
    };
  }
}
