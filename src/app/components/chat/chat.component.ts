import { Component, OnInit , OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ServiceService} from '../service.service';
import {AddUserComponent} from './add-user/add-user.component'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit , OnDestroy  {
  public paramUsername: any;
  public subscription: Subscription;
  public matches: any = window.matchMedia('(max-width: 600px)').matches;

  constructor(public svc: ServiceService, public actRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.subscription = this.actRoute.params.subscribe((param) => {
      this.paramUsername = param['userName'];
    });
  }

  ngOnDestroy() {

  }
}
