import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips.component';
import { ChipsService } from './chips.service';



@NgModule({
  declarations: [ChipsComponent],
  imports: [
    CommonModule
  ],
  providers: [
    ChipsService
  ]
})
export class ChipsModule { }
