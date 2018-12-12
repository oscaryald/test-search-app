import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchTicketsComponent } from './search-tickets/search-tickets.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SearchTicketsComponent, 
    FiltersComponent,
  ],
  declarations: [
    SearchTicketsComponent,
    FiltersComponent
  ]
})
export class SearchModule { }
