import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTourneyComponent } from './tourney.component';
import { TourneyService } from './tourney.service';



@NgModule({
  declarations: [SharedTourneyComponent],
  imports: [
    CommonModule
  ],
  providers: [TourneyService]
})
export class SharedTourneyModule { }
