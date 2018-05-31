import { Component, OnInit, Input, HostListener, Renderer2 } from '@angular/core';
import { Phone } from '../models/phone.model';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent {

  @Input()
  phones: Phone[];

  currentPhone: Phone;

  isShown = false;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('document', 'keyup', (ev: KeyboardEvent) => {
      if (ev.keyCode === 27) {
        this.hidePhone();
      }
    });
  }

  showPhone(phone: Phone) {
    setTimeout(() => {
      this.currentPhone = phone;
      this.isShown = true;
    }, 10);
  }

  hidePhone() {
    this.currentPhone = undefined;
    this.isShown = false;
  }

  // @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    if (ev.keyCode === 27) {
      this.hidePhone();
    }
  }
}
