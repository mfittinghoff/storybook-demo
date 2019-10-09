import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent implements OnInit {

  @Input() bubbleChartData: ChartDataSets[];

  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;
  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 30,
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 30,
          }
        }
      ]
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

}
