import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent implements OnInit {
  choice: number = 1;
  constructor() {}

  ngOnInit() {}
  nextChoice() {
    this.choice +=1;
  }
}
