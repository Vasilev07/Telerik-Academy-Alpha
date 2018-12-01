import { Injectable } from '@angular/core';
import { AnalyticsDemo, AnalyticsImplementation } from '../analytics-demo/analytics-demo';
@Injectable()
export class AnalyticsService {

  constructor(private implementation: AnalyticsImplementation) { }

  record(metric: AnalyticsDemo): void {
    this.implementation.recordEvent(metric);
  }
}
