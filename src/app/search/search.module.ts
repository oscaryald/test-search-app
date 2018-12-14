import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchTicketsComponent } from './search-tickets/search-tickets.component';
import { FiltersComponent } from './filters/filters.component';

import { StopsPipe } from '../shared/pipes/stops.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    SearchTicketsComponent,
    FiltersComponent,
  ],
  declarations: [
    SearchTicketsComponent,
    FiltersComponent,
    StopsPipe,
  ]
})
export class SearchModule { }
