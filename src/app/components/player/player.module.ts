import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerOutComponent } from './player-out/player-out.component';
import { PlayerService } from './player.service';



@NgModule({
  declarations: [PlayerComponent, PlayerOutComponent],
  imports: [
    CommonModule
  ],
  providers: [
    PlayerService
  ]
})
export class PlayerModule { }
