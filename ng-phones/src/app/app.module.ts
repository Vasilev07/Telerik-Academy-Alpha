import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClickOutsideModule } from 'ng-click-outside';

import { AppComponent } from './app.component';
import { PhoneListComponent } from './phones/phone-list.component';
import { PhoneViewComponent } from './phones/phone-view.component';
import { PhoneDetailsComponent } from './phones/details/phone-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneViewComponent,
    PhoneDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
