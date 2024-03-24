import { Component, OnInit} from '@angular/core';
import {ServiceService} from '../service.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{

  constructor(public svc: ServiceService , public router: Router) { }

  ngOnInit() {
  }

  public send(): void{
    this.svc.currentUser = {
      name: this.svc.name,
      messages: [
        {iWrote: this.svc.name , message: 'hello'},
        {otherWrote: this.svc.writeToUser , message: 'hi'}
      ]
    };
    let existUser = false;
    for(let user = 0;user < this.svc.users.length;user++){
      if(this.svc.users[user].name === this.svc.currentUser.name){
        existUser = true;
      }
    }
    existUser ? this.accesUnlock() : alert('false');
  }

  public accesUnlock(): void{
    localStorage.setItem('currentUser' , JSON.stringify(this.svc.currentUser));
    localStorage.setItem('users' , JSON.stringify(this.svc.users));
    console.log(this.svc.currentUser);
    this.router.navigate(['/chat' , this.svc.name]);
  }
}
