import { Component, OnInit } from '@angular/core';
import {DummyService} from '../services/dummy.service';
import {Observable} from 'rxjs';
import {TableRow} from '../models/table-row.interface';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  data$: Observable<TableRow[]>;

  constructor(private readonly dummySvc: DummyService) { }

  ngOnInit() {
    this.data$ = this.dummySvc.getData$();
  }

}
