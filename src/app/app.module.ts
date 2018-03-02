import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxJsonLdModule } from './../../lib/ngx-json-ld.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxJsonLdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
