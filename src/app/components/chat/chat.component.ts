import { Component, OnInit , OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit , OnDestroy  {
  public paramUsername: any;
  public subscription: Subscription;
  public matches: any = window.matchMedia('(max-width: 600px)').matches;
  public menu: boolean = !this.matches ? true : false;

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
