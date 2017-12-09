import { NgModule } from '@angular/core';

const MATERIAL_MODULES = [
  // MatButtonModule,
  // MatCardModule,
  // MatDialogModule,
  // MatIconModule,
  // MatInputModule,
  // MatListModule,
  // MatMenuModule,
  // MatProgressBarModule,
  // MatSelectModule,
  // MatSidenavModule,
  // MatSnackBarModule,
  // MatToolbarModule,
  // MatTabsModule,
  // MatCheckboxModule,
  // MatAutocompleteModule,
  // MatSlideToggleModule,
  // MatButtonToggleModule,
  // MatGridListModule,
  // MatRadioModule,
  // MatDatepickerModule,
  // MatProgressSpinnerModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class MaterialModule {

}
