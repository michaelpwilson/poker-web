import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourneyComponent } from './tourney.component';
import { SharedTourneyModule } from '../../../components/tourney/tourney.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TourneyComponent
  }
];

@NgModule({
  declarations: [TourneyComponent],
  imports: [
    CommonModule,
    SharedTourneyModule,
    RouterModule.forChild(routes),
  ]
})
export class TourneyModule { }
