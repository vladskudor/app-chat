import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatComponent} from './components/chat/chat.component';
import {AuthComponent} from './components/auth/auth.component';
import {RegisterComponent} from './components/register/register.component'

const routes: Routes = [
  {path: 'chat/:userName' , component: ChatComponent},
  {path: 'auth' , component: AuthComponent},
  {path: 'register' , component: RegisterComponent},
  {path: '' , component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
