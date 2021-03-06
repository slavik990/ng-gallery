var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
var GalleryMainComponent = /** @class */ (function () {
    function GalleryMainComponent(gallery) {
        this.gallery = gallery;
    }
    GalleryMainComponent.prototype.ngOnInit = function () {
        // shortcut for thumbnail config
        var thumbPos = this.config.thumbnails ? this.config.thumbnails.position : 0;
        this.thumbDirection = (thumbPos === 'left' || thumbPos === 'right') ? 'row' : 'column';
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GalleryMainComponent.prototype, "state", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GalleryMainComponent.prototype, "config", void 0);
    GalleryMainComponent = __decorate([
        Component({
            selector: 'gallery-main',
            template: "\n    <div class=\"g-container\" [style.flexDirection]=\"thumbDirection\" [ngStyle]=\"config.style\">\n\n      <gallery-thumb *ngIf=\"config.thumbnails\" [state]=\"state\" [config]=\"config.thumbnails\"\n                     [style.background]=\"config.style?.background\"></gallery-thumb>\n\n      <div class=\"g-box\">\n\n        <div class=\"g-image-box\">\n\n          <gallery-image [state]=\"state\" [config]=\"config\" (loading)=\"loading = $event\"></gallery-image>\n\n          <gallery-nav *ngIf=\"config.navigation\" [state]=\"state\"></gallery-nav>\n\n          <!--<div class=\"g-layer\" *ngIf=\"state.images[state.currIndex].layer\" [innerHtml]=\"state.images[state.currIndex].layer\"></div>-->\n\n        </div>\n\n        <gallery-text *ngIf=\"config.description\" [state]=\"state\" [config]=\"config.description\"></gallery-text>\n\n        <gallery-bullets *ngIf=\"config.bullets\" [state]=\"state\" [config]=\"config.bullets\"></gallery-bullets>\n\n        <gallery-player *ngIf=\"config.player\" [state]=\"state\" [config]=\"config.player\"></gallery-player>\n\n      </div>\n\n    </div>\n  ",
            styles: ["\n    gallery-main{-ms-flex:1;flex:1;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}gallery-main *{box-sizing:border-box}.g-container{overflow:hidden;position:relative;z-index:1;max-height:100%;max-width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}@media (max-width:480px){.g-container{width:100%!important;-ms-flex:1;flex:1;-ms-flex-direction:column!important;flex-direction:column!important}}.g-box{height:100%}.g-box,.g-image-box{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex:1;flex:1;-ms-flex-order:1;order:1;height:100%}.g-layer{position:absolute;left:0;top:0;right:0;bottom:0;z-index:2}.g-pan-reset{transition:all .3s linear;transform:translateZ(0)!important}\n  "],
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [GalleryService])
    ], GalleryMainComponent);
    return GalleryMainComponent;
}());
export { GalleryMainComponent };
//# sourceMappingURL=gallery-main.component.js.map