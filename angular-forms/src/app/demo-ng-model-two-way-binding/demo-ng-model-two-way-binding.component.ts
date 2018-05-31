import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-demo-ng-model-two-way-binding',
  templateUrl: './demo-ng-model-two-way-binding.component.html',
  styleUrls: ['./demo-ng-model-two-way-binding.component.css']
})
export class DemoNgModelTwoWayBindingComponent {
  myForm: FormGroup;
  productName: string;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'productName': ['', Validators.required]
    });
  }
  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}
