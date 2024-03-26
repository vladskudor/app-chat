import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public name: string = '';
  public currentUser: any = JSON.parse(localStorage.getItem('currentUser')) || {};
  public writeToUser: any = JSON.parse(localStorage.getItem('writeToUser')) || {};
  public newMessage: string = '';
  public users: any = JSON.parse(localStorage.getItem('users')) || [];
  public sharedMessages: any = [];

  constructor(public router: Router) { }

  public funcWriteToUser(user): void{
    this.sharedMessages = [];
    this.newMessage = '';
    for(let u = 0; u < this.users.length; u++){
      if(this.users[u].name === user.name){
        this.writeToUser = this.users[u];
        localStorage.setItem('writeToUser' , JSON.stringify(this.writeToUser));
        localStorage.setItem('users' , JSON.stringify(this.users));
        console.log(this.writeToUser);
      }
      if(this.users[u].name === this.currentUser.name){
        this.currentUser = this.users[u];
        localStorage.setItem('currentUser' , JSON.stringify(this.currentUser));
        localStorage.setItem('users' , JSON.stringify(this.users));
        console.log(this.currentUser);
      }
    }
    let arr1 = this.writeToUser.arrMessages.filter((user) => user.sendToUser === this.currentUser.name);
    let arr2 = this.currentUser.arrMessages.filter((user) => user.sendToUser === this.writeToUser.name)
    this.sharedMessages = [...arr1 , ...arr2].sort((a , b) => Date.parse(a.date) - Date.parse(b.date));
  }

  public sendMessage(): void{
    this.sharedMessages = [];
    if(this.newMessage.length <= 0){
      let arr1 = this.writeToUser.arrMessages.filter((user) => user.sendToUser === this.currentUser.name);
      let arr2 = this.currentUser.arrMessages.filter((user) => user.sendToUser === this.writeToUser.name)
      this.sharedMessages = [...arr1 , ...arr2].sort((a,b) => Date.parse(a.date) - Date.parse(b.date));
      return;
    }else{
      this.writeToUser.arrMessages.push({
        sendToUser: this.currentUser.name,
        message: this.newMessage,
        date: new Date()
      });
      localStorage.setItem('writeToUser' , JSON.stringify(this.writeToUser));
      localStorage.setItem('users' , JSON.stringify(this.users));
      this.currentUser.arrMessages.push({
        sendToUser: this.currentUser.name,
        message: this.newMessage,
        date: new Date()  
      });
      localStorage.setItem('currentUser' , JSON.stringify(this.currentUser));
      localStorage.setItem('users' , JSON.stringify(this.users));
      let arr1 = this.writeToUser.arrMessages.filter((user) => user.sendToUser === this.currentUser.name);
      let arr2 = this.currentUser.arrMessages.filter((user) => user.sendToUser === this.writeToUser.name)
      this.sharedMessages = [...arr1 , ...arr2].sort((a,b) => Date.parse(a.date) - Date.parse(b.date));
      this.newMessage = '';
    }

  }

  public exit(): void{
    this.sharedMessages = [];
    localStorage.removeItem('currentUser');
    localStorage.removeItem('writeToUser');
    this.router.navigate(['/register']);
  }
}

