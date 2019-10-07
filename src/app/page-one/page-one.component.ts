import { Component, OnInit } from '@angular/core';
import {Color} from 'ng2-charts';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {




  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 10, y: 10, r: 10 },
        { x: 15, y: 5, r: 15 },
        { x: 26, y: 12, r: 23 },
        { x: 7, y: 8, r: 8 },
      ],
      label: 'Series A',
      backgroundColor: 'green',
      borderColor: 'blue',
      hoverBackgroundColor: 'purple',
      hoverBorderColor: 'red',
    },
  ];



  constructor() { }

  ngOnInit() {
  }

  private rand(max: number) {
    return Math.trunc(Math.random() * max);
  }

  private randomPoint(maxCoordinate: number) {
    const x = this.rand(maxCoordinate);
    const y = this.rand(maxCoordinate);
    const r = this.rand(30) + 5;
    return { x, y, r };
  }

  public randomize(): void {
    const numberOfPoints = this.rand(5) + 5;
    const data = Array.apply(null, { length: numberOfPoints }).map(r => this.randomPoint(30));
    this.bubbleChartData[0].data = data;
  }

}
