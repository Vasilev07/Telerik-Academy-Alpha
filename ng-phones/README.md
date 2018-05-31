<img src="https://i.imgur.com/yqIN5FX.png" width="300px" />

## **&lt;ng-phones /&gt;**
### Angular Workshop

Your task is to create an application for a phone store. Below is the sample app.

[SAMPLE APP](https://ng-phones.herokuapp.com)


![Imgur](https://i.imgur.com/bL89xRd.png)


## Step by step guide

1. Run **ng new ng-phones --skip-git=true --skip-tests=true**

1. Install [Angular Material](https://material.angular.io/)

    - **npm install --save @angular/material @angular/cdk**

1. Open **styles.css** file and put the desired theme there + [Material Icons](https://material.io/icons/)

    - **@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';**
    - **@import url('https://fonts.googleapis.com/icon?family=Material+Icons');**

    - [Guide on styles Material Design](https://material.io/guidelines/style/color.html#color-color-palette)

1. Logo of the application

    ```html
    <div class="logo">
        <i class="material-icons">phonelink_ring</i>
        <span class="logo-txt">&lt;ng-phones /&gt;</span>
    </div>
    ```

### Lets get to work!

1. Lets create the models first

    - **ng g model models/phone**
    - **ng g model models/specification**
    - **ng g enum models/display-type**


    ```ts
    export interface Phone {
        brand: string;

        brandImg: string;

        model: string;

        description: string;

        imgUrl: string;

        price: number;

        specs: Specification;
    }
    ```

    ```ts
    export enum DisplayType {
        LED,
        LCD,
        AMOLED
    }
    ```

    ```ts
    export interface Specification {
        displayType: DisplayType;

        displaySize: number;
    }
    ```

1. In the **app.component.ts** file make a collection of phones

    ```ts
    phones: Phone[] = [
        { brand: 'Samsung', brandImg: 'https://seeklogo.com/images/S/Samsung_Mobile-logo-D8645D09B2-seeklogo.com.png', description: 'Best camera ever', model: 'S9+', price: 899, imgUrl: 'https://cdn.shopify.com/s/files/1/1532/0057/products/Samsung-Galaxy-S9-Plus-G965F-Coral-Blue-Front.jpg?v=1521152345', specs: { displaySize: 5.8, displayType: DisplayType.AMOLED } },
        { brand: 'OnePlus', brandImg: 'https://seeklogo.com/images/O/oneplus-logo-B6703954CF-seeklogo.com.png', description: 'Bang for the bucks', model: '5T', price: 599, imgUrl: 'https://staticshop.o2.co.uk/product/images/oneplus-5t-sku-header.png?cb=a1c2633b92f841bdf825d1c718eec321', specs: { displaySize: 6.0, displayType: DisplayType.AMOLED } },
        { brand: 'iPhone', brandImg: 'https://www.pchouselondon.com/wp-content/uploads/2018/02/apple.png', description: 'Notch', model: 'X', price: 999, imgUrl: 'https://cdn.macrumors.com/article-new/2017/10/iphone-x-silver.jpg', specs: { displaySize: 5.8, displayType: DisplayType.AMOLED } },
    ];
    ```

1. It is time to create our first component now. It must be a phone-list component

    - **ng g c phones/phone-list --flat=true --no-spec=true**

1. The **phone-list.component.ts** file must have a field phones: Phone[]
    - In order to get the phones the filed must be **@Input()**
    
    ```ts
    @Input()
    phones: Phone[];
    ```

1. In **phone-list.component.html** file place the **app-phone-list** selector

    - **<app-phone-list [phones]="phones"></app-phone-list>**

1. Create another component which will display each phone in the phones array

    - **ng g c phones/phone-view --flat=true --no-spec=true**

1. Now the **phone-view.component.ts** must have an input property

    - Following the example from the phone-list component create one here

1. In the html file of phone-view create a Material Card to display the phone
    - example: https://material.angular.io/components/card/examples

1. Now there must be an error when compiling
    - You are missing some modules from Angular Material
    - Open **app.module.ts**
    - Import **FormsModule** in the imports array (this has nothing to do with Angular Material. It is Angular module for working with forms.)
    - In order to use Angular Material cards you must import **MatCardModule** as well.

1. What about the price? Should we always put **$** in front of all the prices?
    - The answer is NO
    - Use pipe instead [currency pipe](https://angular.io/api/common/CurrencyPipe)
    - The snippet below will use the default **$** symbol, but you could change it at any time. View the docs.

    ```html
    <p>{{phone.price | currency}}</p>
    ```


1. Now lets use the phone-view component in the phone-list component

    ```html
    <div fxLayout="row wrap" fxLayoutAlign="start start" fxLayoutGap="20px" >
        <div fxFlex="20%" class="card-picture" *ngFor="let phone of phones">
        <app-phone-view (showPhone)="showPhone($event)" [phone]="phone"></app-phone-view>
        </div>
    </div>
    ```

1. But what are these **fxLayout** and other **fx** properties

    - In order to make the layout responsive in Angular Material we must use [flex-layout](https://github.com/angular/flex-layout)
    - [API Flex-layout](https://github.com/angular/flex-layout/wiki/API-Documentation)
    - This enable us to use Flexbox with properties
    - [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

1. Lets create select dropdown to order phones by price or brand

    - open **app.component.html**

    ```html
    <div fxLayout="row wrap" fxLayoutGap="15px">
        <mat-form-field fxFlex="20%">
            <mat-select (change)="onChange()" [(ngModel)]="order" placeholder="Select Order">
            <mat-option value="asc">Ascending</mat-option>
            <mat-option value="desc">Descending</mat-option>
            </mat-select>
        </mat-form-field>

        <mat-form-field fxFlex="20%">
            <mat-select (change)="onChange()" [(ngModel)]="byType" placeholder="Select Type">
            <mat-option value="brand">Brand</mat-option>
            <mat-option value="price">Price</mat-option>
            <mat-option value="model">Model</mat-option>
            </mat-select>
        </mat-form-field>
    </div>
    ```

1. Another error when compiling...

    - Add module **MatSelectModule** in **app.module.ts**
    - Try now

1. Now we need Animation module
    - Add module **BrowserAnimationsModule** in **app.module.ts**

1. Look at the html used above
    - We have two properties bound to [(ngModel)] (**order and byType**).
    - Now we need to declare them in the component.ts file
    - **(change)=onChange()** is an event binding which will call onChange() event on every change of the select dropdown
    - implement sorting in this method in the component.ts file

    ```ts
    onChange(): void {
        // implement it...
        this.filteredPhones = this.filteredPhones.sort((x, y)=>...
    }
    ```
    - **HINT:** In order to not modify the phones collection use new collection called ex: **filteredPhones: Phone[]**
    - Use **ngOnInit()** method to initialize it

    ```ts
    ngOnInit() {
      this.filteredPhones = this.phones.sort((x, y) => x.brand.localeCompare(y.brand));
    }
    ```

    - The above snippet will create the collection on component initialization
    - Move to **app.component.html** and change 

    ```html
    // change this
    <app-phone-list [phones]="phones"></app-phone-list>
    // to this
    <app-phone-list [phones]="filteredPhones"></app-phone-list>
    ```

1. Lets make the phones searchable 

    - Open **app.component.html** again and use the template below

    ```html
    <mat-form-field fxFlex="40%">
        <input matInput placeholder="Search" (input)="onSearch()" [(ngModel)]="search">
    </mat-form-field>
    ```

    - Now you have to include another module **MatInputModule** in the **app.module.ts** file
    - Add the property search in the component.ts file
    - Implement the method **onSearch()**. The snippet below could be used.

    ```ts
    this.filteredPhones = this.phones.filter(x =>
      x.brand.toLowerCase().indexOf(this.search) >= 0 ||
      x.description.toLowerCase().indexOf(this.search) >= 0 ||
      x.model.toLowerCase().indexOf(this.search) >= 0);
    ```
1. Now it is time to show some details about each phone
    - Create a new component **ng g c phones/details/phone-details --flat=true --no-spec=true**
    - Use the template below

    ```html
    <div fxLayout="row" fxLayoutAlign="center center" >
        <mat-card>
            <mat-card-header fxLayout="row">
            <div fxFlex="75">
                <mat-card-title>Brand: {{phone.brand}}</mat-card-title>
                <mat-card-subtitle>Model: {{phone.model}}</mat-card-subtitle>
            </div>
            <div fxFlex="25">
                <img class="brand-img" [src]="phone.brandImg" alt="brand-image">
            </div>
            </mat-card-header>
            <div class="img-phone" fxLayout="row wrap" fxLayoutGap="30px">
            <img fxFlexAlign="start" fxFlex="40" mat-card-image [src]="phone.imgUrl" alt="{{phone.brand}}-{{phone.model}}">
            <div fxFlex="45" fxFlexAlign="start" fxLayout="column">
                <p>Specifications:</p>
                <p fxFlex="25">DisplayType: {{DisplayType[phone.specs.displayType]}}</p>
                <p fxFlex="25">DisplaySize: {{phone.specs.displaySize | number:'1.1-2'}} "</p>
            </div>
            <div class="desc-phone" fxFlex="100">Description: {{phone.description}}</div>
            </div>
            <mat-card-content>
            <p class="price-value">
                Price: {{phone.price | currency}}
            </p>
            </mat-card-content>
            <mat-card-actions>
            <button class="close-btn" mat-raised-button (click)="onHidePhone()">Close</button>
            </mat-card-actions>
        </mat-card>
    </div>
    ```

    ```css
    mat-card{
    position: absolute;
    top: 50px;
    max-width: 400px;
    margin: 20px;
    position: fixed;
    }

    .img-phone{
        margin-top: 20px;
    }

    mat-card-title, mat-card-subtitle{
        font-weight: bold !important;
        font-size: 20px !important;
    }

    .price-value{
        font-style: italic;
    }

    .desc-phone{
        margin: 15px 0;
    }
    .brand-img{
        width: 70%;
    }
    .close-btn{
        background-color: dodgerblue;
        color: white;
    }
    ```

    - In order to use DisplayType in the template go to the **app-phone-details.component.ts** and declare **DisplayType = DisplayType;** property
    - Make an **@Output()** decorator to emit the event from **phone-view.component.ts**

    ```ts
    @Output()
    showPhone = new EventEmitter();


    onShowPhone(): void {
        this.showPhone.emit(this.phone);
    }
    ```

    - In the **phone-view.component.html** catch the click event on the whole element and call **onShowPhone()** method

    - Catch the event on click over the **phone-list.component.html**

    ```html
    <app-phone-view (showPhone)="showPhone($event)" [phone]="phone"></app-phone-view>
    ```

    - Now in the **phone-view.component.ts** file implement the **showPhone(ev)** event

    ```ts
    currentPhone: Phone;
    isShown = false;

    // here phone argument is actually passed with $event property
    showPhone(phone: Phone) {
      this.currentPhone = phone;
      this.isShown = true;
    }
    ```

    - In the html file write

    ```html
    <div *ngIf="isShown">
        <app-phone-details (clickOutside)="hidePhone()" (hidePhone)="hidePhone()" [phone]="currentPhone"></app-phone-details>
    </div>
    ```

    - This will show the phone only if isShown property is true and the phone will be set to the passed phone

1. No if everything is ready we must hide the details about the phone

    ```html
    <button class="close-btn" mat-raised-button (click)="onHidePhone()">Close</button>
    ```

    - Implement the **onHidePhone()** and **@Output() hidePhone() = new EventEmitter()** in **phone-details.component.ts** file

    ```html
    <button class="close-btn" mat-raised-button (click)="onHidePhone()">Close</button>
    ```

    - Catch the event in the host **phone-list.component.html**

    ```html
     <app-phone-details (hidePhone)="hidePhone()" [phone]="currentPhone"></app-phone-details>
    ```

    - Implement the **hidePhone()** method in **phone-list.component.ts**

    ```ts
    hidePhone() {
        this.currentPhone = undefined;
        this.isShown = false;
    }
    ```

1. Use **MatButtonModule** in **app.module.ts** to be able to use the Material buttons
    
    - [mat-raised-button](https://material.angular.io/components/button/overview) attribute
    ```html
    <button class="close-btn" mat-raised-button>Close</button>
    ```

1. Lets make it close not only on click on the button 

    - **npm install ng-click-outside --save**
    - Include it in the modules in **app.module.ts** **ClickOutsideModule**

    ```html
    <app-phone-details (clickOutside)="hidePhone()" (hidePhone)="hidePhone()" [phone]="currentPhone"></app-phone-details>
    ```

    - Use the same **hidePhone()** method but this time with **(clickOutside) event** declared by the installed package

1. Implement Clear Filter button

1. Some advanced stuff

    - Lets make event when click escape button to close the details
    - In **app-list.component.ts** file put the snippet


    - **Option 1**
    - Using Renderer2

    ```ts
    constructor(private renderer: Renderer2) {
        this.renderer.listen('document', 'keyup', (ev: KeyboardEvent) => {
        if (ev.keyCode === 27) {
            this.hidePhone();
        }
        });
    }
    ```

    - **Option 2**

    ```html
    <div (document:keyup)="hidePhone()">
    ```

    - **Option 3**
    - This listens for event from the host. We give it as event **document:keyup with argument $event** and call the appropriate method.


    ```ts
    @HostListener('document:keyup', ['$event'])
    onKeyUp(ev: KeyboardEvent) {
        if (ev.keyCode === 27) {
            this.hidePhone();
        }
    }
    ```
    