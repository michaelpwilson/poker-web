import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableService } from './table.service';
import { CardModule } from '../card/card.module';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';
 
const config: SocketIoConfig = { 
  url: 'http://localhost:3000', 
  options: {}
}
@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    SocketIoModule.forRoot(config),
    HttpClientModule,
    CardModule
  ],
  providers: [
    TableService
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
