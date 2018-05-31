import { Component, OnInit, Input, HostListener, HostBinding, Output, EventEmitter, ElementRef } from '@angular/core';
import { Phone } from '../../models/phone.model';
import { DisplayType } from '../../models/display-type.model';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent {

  constructor(private elRef: ElementRef) {
  }

  DisplayType = DisplayType;
  @Input()
  phone: Phone;

  @Output()
  hidePhone = new EventEmitter();

  onHidePhone(): void {
    this.hidePhone.emit(this);
  }
}
