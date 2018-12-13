import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SearchModule } from './search/search.module';

import { SearchTicketsService } from './shared/services/search-tickets.service';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchModule,
    HttpClientModule,
  ],
  providers: [SearchTicketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
