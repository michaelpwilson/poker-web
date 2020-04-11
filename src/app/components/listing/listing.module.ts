import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing.component';
import { ListingService } from './listing.service';

@NgModule({
  declarations: [ListingComponent],
  imports: [
    CommonModule
  ],
  providers: [ListingService]
})
export class ListingModule { }
