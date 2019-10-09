import {moduleMetadata, storiesOf} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {PageTwoComponent} from '../app/page-two/page-two.component';
import {DummyService} from '../app/services/dummy.service';
import {LoadingAnimationComponent} from '../app/loading-animation/loading-animation.component';
import {TableHeaderCellComponent} from '../app/page-two/table-header-cell/table-header-cell.component';
import * as markdown from './Page-Two-Notes.md';

storiesOf('PageTwoComponent', module)
  .addDecorator(
    moduleMetadata({
      providers: [DummyService],
      declarations: [LoadingAnimationComponent, TableHeaderCellComponent],
    }),
  ).add('Mocked Data', () => ({
    component: PageTwoComponent,
    props: {
      label: 'Default',
      clicked: action('Button clicked')
    },
  }), {notes: markdown});
