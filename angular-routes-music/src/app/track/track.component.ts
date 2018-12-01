import {
  Component,
  OnInit
} from '@angular/core';
import {
  Http
} from '@angular/http';
import {
  Observable
} from 'rxjs';
import {
  SpotifyService
} from '../spotify.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
