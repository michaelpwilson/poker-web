import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableModule } from './components/table/table.module';
import { PlayerModule } from './components/player/player.module';
import { ChatModule } from './components/chat/chat.module';
import { AppService } from './app.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    PlayerModule,
    ChatModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
