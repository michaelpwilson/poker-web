import { NgModule } from '@angular/core';
import { SitNGoComponent } from './sit-n-go.component';
import { Routes, RouterModule } from '@angular/router';
import { ListingModule } from 'src/app/components/listing/listing.module';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { DemoMaterialModule } from 'src/app/material.module';
const routes: Routes = [
  {
    path: '',
    component: SitNGoComponent
  }
];

@NgModule({
  declarations: [
    SitNGoComponent,
    LayoutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ListingModule,
    DemoMaterialModule
  ]
})
export class SitNGoModule { }
