import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Video } from '../video';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VideoItemComponent implements OnInit {
  @Input() video: Video;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  get videoSource() {
    switch (this.video.source) {
      case 'youtube':
        return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.video.videoId}`);
      case 'facebook':
        return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.facebook.com/video/embed?video_id=${this.video.videoId}`);
      case 'url':
        return this.sanitizer.bypassSecurityTrustResourceUrl(`${this.video.url}`);
      default:
        return this.sanitizer.bypassSecurityTrustResourceUrl('');
    }
  }

  isVideoDataValid() {
    if (this.video.title && this.video.views >= 0) {
      if (this.video.source === 'url' && this.video.url) {
        return true;
      } else if (this.video.videoId) {
        return true;
      }
    }

    return false;
  }
}
