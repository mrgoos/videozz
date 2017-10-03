import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Video } from './video';
import { VideoFeedService } from './video-feed.service';

@Component({
  selector: 'app-video-feed',
  templateUrl: './video-feed.component.html',
  styleUrls: ['./video-feed.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VideoFeedComponent implements OnInit {
  videos: Video[];

  constructor(private videoFeedService: VideoFeedService) { }

  ngOnInit() {
    this.videos = this.videoFeedService.getVideos().items;
  }

}
