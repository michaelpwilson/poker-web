import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatService } from './chat.service';



@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule
  ],
  providers: [
    ChatService
  ]
})
export class ChatModule { }
