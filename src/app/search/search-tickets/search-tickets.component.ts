import { Component, OnInit } from '@angular/core';
import { SearchTicketsService } from '../../shared/services/search-tickets.service';
import { Ticket } from '../../shared/interfaces/tickets.interface';
import { FilterItem } from '../../shared/interfaces/checkboxes.interface';

@Component({
  selector: 'app-search-tickets',
  templateUrl: './search-tickets.component.html',
  styleUrls: ['./search-tickets.component.css']
})
export class SearchTicketsComponent implements OnInit {
  tickets: Ticket[] = [];
  selectedTickets: Ticket[] = [];
  currentCurrency = '₽';

  constructor(private searchTicketsService: SearchTicketsService) { }

  ngOnInit() {
    this.searchTicketsService.getTickets()
      .subscribe((tickets: Ticket[]) => {
        this.tickets = tickets;
        this.selectedTickets = tickets;
        this.searchTicketsService.setTicketsSubject$(this.tickets);
      });
  }

  onSelected(checkboxes) {
    this.selectedTickets = this.tickets.filter((ticket: Ticket) => {
      return checkboxes.some((checkbox: FilterItem) => ticket.stops === checkbox.value && checkbox.checked);
    });
    if (!this.selectedTickets.length) {
      this.selectedTickets = this.tickets;
    }
  }

  onSelectedCurrency(currency) {
    this.selectedTickets = this.tickets.map((ticket: Ticket) => {
      return {
        ...ticket,
        price: Math.ceil(currency.value * ticket.price),
      };
    });
    this.currentCurrency = currency.symbol;
  }

}
