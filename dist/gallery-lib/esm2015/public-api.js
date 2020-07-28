/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Public API Surface of gallery-lib
 */
export { GalleryComponent } from './lib/component/gallery/gallery.component';
export { GalleryBulletsComponent } from './lib/component/gallery-bullets/gallery-bullets.component';
export { animation } from './lib/component/gallery-image/gallery-image.animation';
export { GalleryImageComponent } from './lib/component/gallery-image/gallery-image.component';
export { GalleryLoaderComponent } from './lib/component/gallery-loader/gallery-loader.component';
export { GalleryMainComponent } from './lib/component/gallery-main/gallery-main.component';
export { GalleryModalComponent } from './lib/component/gallery-modal/gallery-modal.component';
export { GalleryNavComponent } from './lib/component/gallery-nav/gallery-nav.component';
export { GalleryPlayerComponent } from './lib/component/gallery-player/gallery-player.component';
export { GalleryTextComponent } from './lib/component/gallery-text/gallery-text.component';
export { GalleryThumbComponent } from './lib/component/gallery-thumb/gallery-thumb.component';
export { galleryFactory, CONFIG, GalleryModule } from './lib/gallery.module';
export { GalleryDirective } from './lib/directive/gallery.directive';
export { LazyDirective } from './lib/directive/lazy.directive';
export { TapDirective } from './lib/directive/tap.directive';
export { GalleryService } from './lib/service/gallery.service';
export {} from './lib/service/gallery.state';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbGxlcnktbGliLyIsInNvdXJjZXMiOlsicHVibGljLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLGlDQUFjLDJDQUEyQyxDQUFDO0FBQzFELHdDQUFjLDJEQUEyRCxDQUFDO0FBQzFFLDBCQUFjLHVEQUF1RCxDQUFDO0FBQ3RFLHNDQUFjLHVEQUF1RCxDQUFDO0FBQ3RFLHVDQUFjLHlEQUF5RCxDQUFDO0FBQ3hFLHFDQUFjLHFEQUFxRCxDQUFDO0FBQ3BFLHNDQUFjLHVEQUF1RCxDQUFDO0FBQ3RFLG9DQUFjLG1EQUFtRCxDQUFDO0FBQ2xFLHVDQUFjLHlEQUF5RCxDQUFDO0FBQ3hFLHFDQUFjLHFEQUFxRCxDQUFDO0FBQ3BFLHNDQUFjLHVEQUF1RCxDQUFDO0FBQ3RFLHNEQUFjLHNCQUFzQixDQUFDO0FBQ3JDLGlDQUFjLG1DQUFtQyxDQUFDO0FBQ2xELDhCQUFjLGdDQUFnQyxDQUFDO0FBQy9DLDZCQUFjLCtCQUErQixDQUFDO0FBQzlDLCtCQUFjLCtCQUErQixDQUFDO0FBQzlDLGVBQWMsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogUHVibGljIEFQSSBTdXJmYWNlIG9mIGdhbGxlcnktbGliXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9saWIvY29tcG9uZW50L2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvY29tcG9uZW50L2dhbGxlcnktYnVsbGV0cy9nYWxsZXJ5LWJ1bGxldHMuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2NvbXBvbmVudC9nYWxsZXJ5LWltYWdlL2dhbGxlcnktaW1hZ2UuYW5pbWF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2NvbXBvbmVudC9nYWxsZXJ5LWltYWdlL2dhbGxlcnktaW1hZ2UuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2NvbXBvbmVudC9nYWxsZXJ5LWxvYWRlci9nYWxsZXJ5LWxvYWRlci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvY29tcG9uZW50L2dhbGxlcnktbWFpbi9nYWxsZXJ5LW1haW4uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2NvbXBvbmVudC9nYWxsZXJ5LW1vZGFsL2dhbGxlcnktbW9kYWwuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2NvbXBvbmVudC9nYWxsZXJ5LW5hdi9nYWxsZXJ5LW5hdi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvY29tcG9uZW50L2dhbGxlcnktcGxheWVyL2dhbGxlcnktcGxheWVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9jb21wb25lbnQvZ2FsbGVyeS10ZXh0L2dhbGxlcnktdGV4dC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvY29tcG9uZW50L2dhbGxlcnktdGh1bWIvZ2FsbGVyeS10aHVtYi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvZ2FsbGVyeS5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvZGlyZWN0aXZlL2dhbGxlcnkuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2RpcmVjdGl2ZS9sYXp5LmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9kaXJlY3RpdmUvdGFwLmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlL2dhbGxlcnkuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlL2dhbGxlcnkuc3RhdGUnO1xuIl19