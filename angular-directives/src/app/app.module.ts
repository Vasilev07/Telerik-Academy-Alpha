import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';


@NgModule({
  declarations: [
    AppComponent,
    SwitchCaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
