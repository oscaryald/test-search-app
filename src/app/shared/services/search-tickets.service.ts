import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Ticket } from '../interfaces/tickets.interface';

const BASE_URL = 'http://localhost:3004/';
@Injectable()
export class SearchTicketsService {

  private tickets$: Subject<Ticket[]> = new Subject();

  constructor(
    private http: HttpClient,
  ) { }

  setTicketsSubject$(value: Ticket[]) {
    this.tickets$.next(value);
  }

  getTicketsSubject$(): Observable<Ticket[]> {
    return this.tickets$.asObservable();
  }

  getTickets(): Observable<any> {
    return this.http.get(`${BASE_URL}tickets`)
             .pipe(map(res => res));
  }

}
