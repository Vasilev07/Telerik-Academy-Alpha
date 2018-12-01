import { Metric } from './analitycs';

export interface AnalitycsImplementation {
    recordEvent(metric: Metric): void;
}
