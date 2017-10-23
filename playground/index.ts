/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgxJsonLdModule } from 'ngx-json-ld';

@Component({
  selector: 'app',
  template: `<ngx-json-ld [json]="json"></ngx-json-ld>`
})
class AppComponent {
  json = {
    name: 'Cory',
    age: 26
  };
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, NgxJsonLdModule.forRoot()]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
