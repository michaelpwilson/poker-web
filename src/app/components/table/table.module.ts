import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableService } from './table.service';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule
  ],
  providers: [
    TableService
  ]
})
export class TableModule { }
