# ngx-json-ld

## Installation

To install this library, run:

```bash
$ npm install ngx-json-ld --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import library module
import { NgxJsonLdModule } from 'ngx-json-ld';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Register module
    NgxJsonLdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use the `ngx-json-ld` component.

```xml
<ngx-json-ld [json]="myJsonData"></ngx-json-data>
```

## License

MIT © [Cory Rylan](https://coryrylan.com)
