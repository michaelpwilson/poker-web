// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
// angular environment
import { environment } from '../environments/environment';
// app stuff
import { AppComponent } from './app.component';
import { AppService } from './app.service';
// ngrx modules
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
// ngrx stuff
import { reducers, metaReducers } from './reducers';
// component modules
import { TableModule } from './components/table/table.module';
import { PlayerModule } from './components/player/player.module';
import { ChatModule } from './components/chat/chat.module';

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
    }),
    RouterModule.forRoot([
      // routes
    ]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
