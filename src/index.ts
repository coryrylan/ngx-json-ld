import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsonLdComponent } from './json-ld.component';

export * from './json-ld.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    JsonLdComponent
  ],
  exports: [
    JsonLdComponent
  ]
})
export class NgxJsonLdModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxJsonLdModule
    };
  }
}
