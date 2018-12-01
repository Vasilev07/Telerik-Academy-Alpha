import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `<a uiSref="hello" uiSrefActive="active">Hello</a>
  <a uiSref="about" uiSrefActive="active">About</a>
  <ui-view></ui-view>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
