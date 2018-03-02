import { Component, HostBinding, Input, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

var NgxJsonLdComponent = /** @class */ (function () {
    function NgxJsonLdComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    NgxJsonLdComponent.prototype.ngOnChanges = function (changes) {
        this.jsonLD = this.getSafeHTML(changes["json"].currentValue);
    };
    NgxJsonLdComponent.prototype.getSafeHTML = function (value) {
        var json = value ? JSON.stringify(value, null, 2).replace(/<\/script>/g, '<\\/script>') : '';
        var html = "<script type=\"application/ld+json\">" + json + "</script>";
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    return NgxJsonLdComponent;
}());
NgxJsonLdComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-json-ld',
                template: ''
            },] },
];
NgxJsonLdComponent.ctorParameters = function () { return [
    { type: DomSanitizer, },
]; };
NgxJsonLdComponent.propDecorators = {
    "json": [{ type: Input },],
    "jsonLD": [{ type: HostBinding, args: ['innerHTML',] },],
};
var NgxJsonLdModule = /** @class */ (function () {
    function NgxJsonLdModule() {
    }
    return NgxJsonLdModule;
}());
NgxJsonLdModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [NgxJsonLdComponent],
                exports: [NgxJsonLdComponent]
            },] },
];
NgxJsonLdModule.ctorParameters = function () { return []; };

export { NgxJsonLdModule, NgxJsonLdComponent as ɵa };
//# sourceMappingURL=ngx-json-ld.js.map
