import { Injectable } from '@angular/core';
import { Metric } from '../analitycs';
import { AnalitycsImplementation } from '../analitycs-implementation';

@Injectable()
export class AnalitycsService {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private implementation: AnalitycsImplementation) { }
  record(metric: Metric): void {
      this.implementation.recordEvent(metric);
  }
}
