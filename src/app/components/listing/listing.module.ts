import { NgModule } from '@angular/core';
import { ListingComponent } from './listing.component';
import { ListingService } from './listing.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from 'src/app/material.module';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    MatListModule
  ],
  providers: [ListingService],
  exports: [ListingComponent]
})
export class ListingModule { }
