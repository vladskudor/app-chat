import { ServiceService } from './../../service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  public addUser: boolean = false;
  public newUserName: string = '';
  public newUser = {
    name: this.newUserName,
    friends: [],
    arrMessages: []
  };
  constructor(public svc: ServiceService) { }

  ngOnInit() {
  }


  public registerNewUser(): void{
    this.newUser = {
      name: this.newUserName,
      friends: [],
      arrMessages: []
    };

    let existUser = false;
    for(let user = 0;user < this.svc.users.length;user++){
      if(this.svc.users[user].name === this.newUser.name){
        existUser = true;
        return;
      }
    }
    !existUser ? this.accesUnlock() : () => alert('User exists');
  }

  public accesUnlock(): void{
    this.svc.users.push(this.newUser);
    console.log(this.newUser);
    localStorage.setItem('users' , JSON.stringify(this.svc.users));
    this.addUser = false;
  }

}
