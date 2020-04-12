import { NgModule } from '@angular/core';
import { ListingComponent } from './listing.component';
import { ListingService } from './listing.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [ListingComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
  ],
  providers: [ListingService],
  exports: [ListingComponent]
})
export class ListingModule { }
