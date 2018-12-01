import {
    YouTubeSearchResultService,
    YOUTUBE_API_KEY,
    YOUTUBE_API_URL
} from './you-tube-search-result.service';

export const YouTubeSearchInjectables: Array < any > = [{
    provide: YouTubeSearchResultService,
    useClass: YouTubeSearchResultService
  },
  {
    provide: YOUTUBE_API_KEY,
    useClass: YOUTUBE_API_KEY
  },
  {
    provide: YOUTUBE_API_URL,
    useClass: YOUTUBE_API_URL
  }
];
