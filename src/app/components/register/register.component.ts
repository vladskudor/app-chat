import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public svc: ServiceService , public router: Router) { }

  ngOnInit() {
    
  }

  public register(): void{
    this.svc.currentUser = {
      name: this.svc.name,
      friends: [],
      arrMessages: []
    };

    let existUser = false;
    for(let user = 0;user < this.svc.users.length;user++){
      if(this.svc.users[user].name === this.svc.currentUser.name){
        existUser = true;
        return;
      }
    }
    !existUser ? this.accesUnlock() : alert('false');
  }

  public accesUnlock(): void{
    localStorage.setItem('currentUser' , JSON.stringify(this.svc.currentUser));
    this.svc.users.push(this.svc.currentUser);
    localStorage.setItem('users' , JSON.stringify(this.svc.users));
    this.router.navigate(['/chat' , this.svc.name]);
  }
}
