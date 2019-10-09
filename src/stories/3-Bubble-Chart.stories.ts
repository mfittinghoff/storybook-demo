import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs, button} from '@storybook/addon-knobs';
import {BubbleChartComponent} from '../app/page-one/bubble-chart/bubble-chart.component';
import {ChartsModule} from 'ng2-charts';

const values = [
  {
    data: [
      {x: 10, y: 10, r: 10},
      {x: 15, y: 5, r: 15},
      {x: 26, y: 12, r: 23},
      {x: 7, y: 8, r: 8},
    ],
    label: 'Series A',
    backgroundColor: 'green',
    borderColor: 'blue',
    hoverBackgroundColor: 'purple',
    hoverBorderColor: 'red',
  }
];

const dataSet = {
  data: [
    {x: 20, y: 12, r: 4},
    {x: 3, y: 2, r: 12},
    {x: 7, y: 15, r: 8},
    {x: 28, y: 28, r: 18},
  ],
  label: 'Series B',
  backgroundColor: 'green',
  borderColor: 'blue',
  hoverBackgroundColor: 'purple',
  hoverBorderColor: 'red',
};


storiesOf('BubbleChart', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [ChartsModule],
    }))
  .add('Default', () => {
    button('Add dataset', () => values.push(dataSet));
    return {
      component: BubbleChartComponent,
      props:
        {
          bubbleChartData: values,
        }
    };
  });
