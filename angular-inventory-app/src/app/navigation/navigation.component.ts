import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  username: string;
  constructor(private userService: UserService) {
  }

  ngOnInit() {}

  signIn(): void {
    this.userService.setUser({
      name: 'Nate Murr'
    });

    this.username = this.userService.getUser().name;
    console.log('Username is: ', this.username);
  }
}
