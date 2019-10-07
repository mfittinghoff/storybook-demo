import { Injectable } from '@angular/core';
import {TableRow} from '../models/table-row.interface';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  private data: TableRow[] = [
    {id: 1, street: 'Pierbusch', city: 'Lünen', houseNumber: '17', zipCode: '44536'},
    {id: 2, street: 'Emil-Figge-Straße', city: 'Dortmund', houseNumber: '85', zipCode: '44227'},
    {id: 3, street: 'Willy-Brandt-Straße', city: 'Hamburg', houseNumber: '23-25', zipCode: '20457'},
  ];

  private readonly data$: Observable<TableRow[]>;

  constructor() {
    this.data$ = of(this.data).pipe(delay(2000));
  }

  getData$(): Observable<TableRow[]> {
    return this.data$;
  }
}
