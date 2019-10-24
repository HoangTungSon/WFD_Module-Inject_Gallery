import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageCardComponent } from './image-gallery/image-card/image-card.component';
import {ImageGalleryModule} from './image-gallery/image-gallery/image-gallery.module';
import {GalleryConfig} from './image-gallery/token';

@NgModule({
  declarations: [
    AppComponent,
    // ImageGalleryComponent,
    // ImageCardComponent
  ],
  imports: [
    BrowserModule,
    ImageGalleryModule
  ],
  providers: [{
    provide: GalleryConfig, useValue: 2
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
