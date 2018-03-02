(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/platform-browser', '@angular/common'], factory) :
	(factory((global['ngx-json-ld'] = {}),global.ng.core,global.ng.platformBrowser,global.ng.common));
}(this, (function (exports,core,platformBrowser,common) { 'use strict';

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
    { type: core.Component, args: [{
                selector: 'ngx-json-ld',
                template: ''
            },] },
];
NgxJsonLdComponent.ctorParameters = function () { return [
    { type: platformBrowser.DomSanitizer, },
]; };
NgxJsonLdComponent.propDecorators = {
    "json": [{ type: core.Input },],
    "jsonLD": [{ type: core.HostBinding, args: ['innerHTML',] },],
};
var NgxJsonLdModule = /** @class */ (function () {
    function NgxJsonLdModule() {
    }
    return NgxJsonLdModule;
}());
NgxJsonLdModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [NgxJsonLdComponent],
                exports: [NgxJsonLdComponent]
            },] },
];
NgxJsonLdModule.ctorParameters = function () { return []; };

exports.NgxJsonLdModule = NgxJsonLdModule;
exports.ɵa = NgxJsonLdComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-json-ld.umd.js.map
