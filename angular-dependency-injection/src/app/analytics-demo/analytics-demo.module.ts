import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  AnalyticsDemo,
  AnalyticsImplementation
} from '../analytics-demo/analytics-demo';
import {
  AnalyticsService
} from '../service/analytics.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [{
    // `AnalyticsService` is the _token_ we use to inject
    // note, the token is the class, but it's just used as an identifier!
    provide: AnalyticsService,
    // useFactory is a function - whatever is returned from this function
    // will be injected
    useFactory() {
      // create an implementation that will log the event
      const loggingImplementation: AnalyticsImplementation = {
        recordEvent: (metric: AnalyticsDemo): void => {
          console.log('The metric is:', metric);
        }
      };
      // create our new `AnalyticsService` with the implementation
      return new AnalyticsService(loggingImplementation);
    }
  }],
  declarations: [],
})
export class AnalyticsDemoModule {}
