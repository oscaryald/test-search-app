import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../../shared/interfaces/tickets.interface';
import { SearchTicketsService } from '../../shared/services/search-tickets.service';
import { FilterItem } from '../../shared/interfaces/checkboxes.interface';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {

  @Output() selected: EventEmitter<any> = new EventEmitter();
  @Output() selectedCurrency: EventEmitter<any> = new EventEmitter();
  checkboxes: FilterItem[] = [
    {
      value: 'all',
      checked: false,
      label: 'Все'
    }
  ];

  currencies: FilterItem[] = [
    {
      value: 1,
      checked: true,
      label: 'RUB',
    },
    {
      value: 0.015,
      checked: false,
      label: 'USD',
    },
    {
      value: 0.013,
      checked: false,
      label: 'EUR',
    },
  ];

  constructor(private searchTicketsService: SearchTicketsService) { }

  ngOnInit() {
    this.searchTicketsService.getTicketsSubject$()
      .subscribe((tickets: Ticket[]) => {
        const obj = {};
        const getChekboxes: FilterItem[] = tickets.map(ticket => {
          const checkbox = {
            value: ticket.stops,
            checked: false,
            label: 'пересадки'
          };
          if (ticket.stops === 1) {
            checkbox.label = 'пересадка';
          } else if (ticket.stops === 0) {
            checkbox.label = 'без пересадок';
          }
          return checkbox;
        })
        .reduce((acc, curr) => {
          const val = curr.value;
          if (!obj[val]) {
            obj[val] = true;
            acc.push(curr);
          }
          return acc;
        }, [])
        .sort(function(a, b) {
          return a.value - b.value;
        });
        this.checkboxes = [...this.checkboxes, ...getChekboxes];
      });
  }


  onSelected(checkbox) {
    checkbox.checked = !checkbox.checked;
    if (checkbox.value === 'all') {
      this.checkboxes.forEach(item => {
        item.checked = checkbox.checked;
      });
    } else {
      this.checkboxes[0].checked = false;
    }
    this.selected.emit(this.checkboxes);
  }

  changeCurrency(currency) {
    this.currencies.forEach((item) => {
      item.checked = false;
      if (item.label === currency.label) {
        item.checked = true;
      }
    });
    this.selectedCurrency.emit(currency);
  }

}
