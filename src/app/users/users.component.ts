import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user;
  users;

  // DI
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();

    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log('Users: ', this.users);
    });

  }

}
