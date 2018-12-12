import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  @Input() tickets;
  @Output() selected: EventEmitter<any> = new EventEmitter();
  checkboxes = [];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      let obj = {};
      this.checkboxes = this.tickets.map(ticket => {
        let checkbox = {
          value: ticket.stops,
          checked: false,
          label: 'пересадки'
        };
        let stops = parseInt(ticket.stops);
        if (stops === 1) {
          checkbox.label = 'пересадка';
        } else if(stops === 0) {
          checkbox.label = 'без пересадок';
        }
        return checkbox;
      })
      .reduce((acc, curr) => {
        let val = curr.value;
        if(!obj[val]){
          obj[val] = true;
          acc.push(curr)
        }
        return acc
      }, [])
      .sort(function(a, b) {
        return a.value - b.value;
      });

    }, 1000)

  }


  onSelected(checkbox) {
    checkbox.checked = !checkbox.checked;
    this.selected.emit(checkbox)
  }

}
