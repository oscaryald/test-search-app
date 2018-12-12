import { Component, OnInit } from '@angular/core';
import { SearchTicketsService } from 'src/app/shared/search-tickets.service';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.css']
})
export class SearchTicketsComponent implements OnInit {
  tickets = [];
  selectedTickets = [];
  constructor(private searchTicketsService: SearchTicketsService) { }

  ngOnInit() {
    this.searchTicketsService.getTickets()
      .subscribe(tickets => {
        this.tickets = tickets;
        this.selectedTickets = tickets
      })
  }

  onSelected(event){
    this.tickets.forEach(ticket => {
      if (ticket.stops === event.value) {
        ticket.checked = event.checked
      }
    })
    this.selectedTickets = this.tickets.filter(ticket => {
      return ticket.checked;
    })
    if(!this.selectedTickets.length) this.selectedTickets = this.tickets;
  }

}
