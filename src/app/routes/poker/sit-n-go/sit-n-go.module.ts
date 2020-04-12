import { NgModule } from '@angular/core';
import { SitNGoComponent } from './sit-n-go.component';
import { Routes, RouterModule } from '@angular/router';
import { ListingModule } from 'src/app/components/listing/listing.module';

const routes: Routes = [
  {
    path: '',
    component: SitNGoComponent
  }
];

@NgModule({
  declarations: [SitNGoComponent],
  imports: [
    RouterModule.forChild(routes),
    ListingModule
  ]
})
export class SitNGoModule { }
