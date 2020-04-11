// angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {
    path: 'table',
    loadChildren: () => import('./routes/game/game.module').then(m => m.GameModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
