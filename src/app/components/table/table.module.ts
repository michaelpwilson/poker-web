import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableService } from './table.service';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  providers: [
    TableService
  ]
})
export class TableModule { }
