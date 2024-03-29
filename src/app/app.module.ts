import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';
import { AddUserComponent } from './components/chat/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    AuthComponent,
    RegisterComponent,
    AddUserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
