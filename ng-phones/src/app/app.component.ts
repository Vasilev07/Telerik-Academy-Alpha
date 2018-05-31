import {
  Component
} from '@angular/core';
import {
  Phone
} from './models/phone.model';
import {
  DisplayType
} from './models/display-type.model';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filteredPhones: Phone[];
  search = '';
  order = '';
  byType = 'brand';

  phones: Phone[] = [
    { brand: 'Samsung', brandImg: 'https://seeklogo.com/images/S/Samsung_Mobile-logo-D8645D09B2-seeklogo.com.png', description: 'Best camera ever', model: 'S9+', price: 899, imgUrl: 'https://cdn.shopify.com/s/files/1/1532/0057/products/Samsung-Galaxy-S9-Plus-G965F-Coral-Blue-Front.jpg?v=1521152345', specs: { displaySize: 5.8, displayType: DisplayType.AMOLED } },
    { brand: 'OnePlus', brandImg: 'https://seeklogo.com/images/O/oneplus-logo-B6703954CF-seeklogo.com.png', description: 'Bang for the bucks', model: '5T', price: 599, imgUrl: 'https://www.honorbuy.com/5483-thickbox_default/oneplus-5t-6gb-ram-64gb-rom-smartphone.jpg', specs: { displaySize: 6.0, displayType: DisplayType.AMOLED } },
    { brand: 'iPhone', brandImg: 'https://www.pchouselondon.com/wp-content/uploads/2018/02/apple.png', description: 'Notch', model: 'X', price: 999, imgUrl: 'https://cdn.macrumors.com/article-new/2017/10/iphone-x-silver.jpg', specs: { displaySize: 5.8, displayType: DisplayType.AMOLED } },
  ];

  ngOnInit() {
    this.filteredPhones = this.phones.sort((x, y) => x.brand.localeCompare(y.brand));
  }

  onChange(): void {
    this.filterBySearch();

    this.filteredPhones = this.filteredPhones.sort((x, y) => {
      const orderNumber = this.order === 'asc' ? 1 : -1;
      let a = x[this.byType];
      let b = y[this.byType];

      if (typeof x[this.byType] === 'string') {
        a = x[this.byType].toLocaleLowerCase();
        b = y[this.byType].toLocaleLowerCase();
      }

      if (a > b) {
        return 1 * orderNumber;
      } else if (a < b) {
        return -1 * orderNumber;
      } else {
        return 0;
      }
    });
  }

  onSearch(): void {
    this.filterBySearch();
  }

  clearFilter(): void {
    console.log(this.phones.slice());
    this.filteredPhones = this.phones.slice();
    console.log(this.filteredPhones);
    this.byType = 'brand';
    this.order = '';
    this.search = '';
  }

  private filterBySearch(): void {
    this.search = this.search.toLowerCase().trim();

    this.filteredPhones = this.phones.filter(x =>
      x.brand.toLowerCase().indexOf(this.search) >= 0 ||
      x.description.toLowerCase().indexOf(this.search) >= 0 ||
      x.model.toLowerCase().indexOf(this.search) >= 0);
  }

}
