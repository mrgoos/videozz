import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VideoFeedComponent } from './video-feed/video-feed.component';
import { VideoItemComponent } from './video-feed/video-item/video-item.component';
import { VideoFeedService } from './video-feed/video-feed.service';
import { DataGridModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    VideoFeedComponent,
    VideoItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataGridModule
  ],
  providers: [VideoFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
