import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { NgStyleExampleComponent } from './ng-style-example/ng-style-example.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';


@NgModule({
  declarations: [
    AppComponent,
    NgIfExampleComponent,
    NgSwitchExampleComponent,
    NgStyleExampleComponent,
    NgClassExampleComponent,
    NgForExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
