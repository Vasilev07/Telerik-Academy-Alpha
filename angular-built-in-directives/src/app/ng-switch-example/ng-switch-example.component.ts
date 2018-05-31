import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch-example',
  templateUrl: './ng-switch-example.component.html',
  styleUrls: ['./ng-switch-example.component.css']
})
export class NgSwitchExampleComponent implements OnInit {
  choices: number;
  constructor() { }

  ngOnInit() {
    this.choices = 1;
  }

  nextChoice(): void {
    this.choices += 1;

    if (this.choices > 5) {
      this.choices = 1;
    }
  }

}
