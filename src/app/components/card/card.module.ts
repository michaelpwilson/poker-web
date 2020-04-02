import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardService } from './card.service';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule
  ],
  providers: [
    CardService
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
