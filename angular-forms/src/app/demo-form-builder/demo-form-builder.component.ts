import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'
@Component({
  selector: 'app-demo-form-builder',
  templateUrl: './demo-form-builder.component.html',
  styleUrls: ['./demo-form-builder.component.css']
})
export class DemoFormBuilderComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });
    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe((value: string) => {
      console.log('current input changed to: ', value)
    });

    this.myForm.valueChanges.subscribe((value: string) => {
      console.log('form changed to: ', value)
    });
  }

  ngOnInit() {
  }

  onSubmit(value: any): void{
    console.log(value);
  }

}
