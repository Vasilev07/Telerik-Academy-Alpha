import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DemoFormComponent } from './demo-form/demo-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoFormBuilderComponent } from './demo-form-builder/demo-form-builder.component';
import { DemoNgModelTwoWayBindingComponent } from './demo-ng-model-two-way-binding/demo-ng-model-two-way-binding.component';
import { ReactiveFormsDemoComponent } from './reactive-forms-demo/reactive-forms-demo.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component'

@NgModule({
  declarations: [
    AppComponent,
    DemoFormComponent,
    DemoFormBuilderComponent,
    DemoNgModelTwoWayBindingComponent,
    ReactiveFormsDemoComponent,
    TemplateDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
