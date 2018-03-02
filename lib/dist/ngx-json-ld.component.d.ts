import { OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
export declare class NgxJsonLdComponent implements OnChanges {
    private sanitizer;
    json: any;
    jsonLD: SafeHtml;
    constructor(sanitizer: DomSanitizer);
    ngOnChanges(changes: SimpleChanges): void;
    getSafeHTML(value: {}): SafeHtml;
}
