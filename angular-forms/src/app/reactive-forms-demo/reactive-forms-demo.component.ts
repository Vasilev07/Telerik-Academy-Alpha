import {
  Component,
  OnInit
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-reactive-forms-demo',
  templateUrl: './reactive-forms-demo.component.html',
  styleUrls: ['./reactive-forms-demo.component.css']
})
export class ReactiveFormsDemoComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  productName: string;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['ABC123', Validators.compose([Validators.required])],
      'productName': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe((value: string) => {
      console.log('sku changed to:', value);
    });

    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('form changed to:', form);
    });
  }

  ngOnInit() {}

  onSubmit(form: any): void {
    console.log('submitted value: ', form);
  }

  skuValidator(control: FormControl): {
    [s: string]: boolean
  } {
    if (!control.value.match(/^123/)) {
      return {
        invalidSku: true
      };
    }
  }
}
