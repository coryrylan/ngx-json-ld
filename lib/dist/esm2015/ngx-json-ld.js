import { Component, HostBinding, Input, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxJsonLdComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.jsonLD = this.getSafeHTML(changes["json"].currentValue);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getSafeHTML(value) {
        const /** @type {?} */ json = value ? JSON.stringify(value, null, 2).replace(/<\/script>/g, '<\\/script>') : '';
        const /** @type {?} */ html = `<script type="application/ld+json">${json}</script>`;
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}
NgxJsonLdComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-json-ld',
                template: ''
            },] },
];
/** @nocollapse */
NgxJsonLdComponent.ctorParameters = () => [
    { type: DomSanitizer, },
];
NgxJsonLdComponent.propDecorators = {
    "json": [{ type: Input },],
    "jsonLD": [{ type: HostBinding, args: ['innerHTML',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxJsonLdModule {
}
NgxJsonLdModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [NgxJsonLdComponent],
                exports: [NgxJsonLdComponent]
            },] },
];
/** @nocollapse */
NgxJsonLdModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { NgxJsonLdModule, NgxJsonLdComponent as ɵa };
//# sourceMappingURL=ngx-json-ld.js.map
