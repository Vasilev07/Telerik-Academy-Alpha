export interface AnalyticsDemo {
  eventName: string;
  scope: string;
}
export interface AnalyticsImplementation {
  recordEvent(metric: AnalyticsDemo): void;
}
