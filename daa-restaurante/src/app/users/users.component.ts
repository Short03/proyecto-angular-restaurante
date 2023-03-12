import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any = [];

  constructor(pricate usersService: UsersService) {}

  ngOnInit(){
    this.users = this.usersServices.getUsers();
}
}
