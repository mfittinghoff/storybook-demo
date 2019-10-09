import {storiesOf} from '@storybook/angular';
import {ButtonComponent} from '../app/button/button.component';
import {action} from '@storybook/addon-actions';
import {text, withKnobs} from '@storybook/addon-knobs';

storiesOf('ButtonComponent', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    component: ButtonComponent,
    props: {
      label: 'Default',
      clicked: action('Button clicked')
    },
  }))
  .add('Dynamic Label', () => ({
    component: ButtonComponent,
    props: {
      label: text('label', 'Change me please'),
      clicked: action('Button clicked')
    },
  }));
