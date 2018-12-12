import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class SearchTicketsService {

  baseUrl = 'http://localhost:3004/';

  constructor(
    private http: HttpClient,
  ) { }

  getTickets(): Observable<any> {
    return this.http.get(`${this.baseUrl}tickets`)
             .pipe(map(res => res));
  }
  
}
