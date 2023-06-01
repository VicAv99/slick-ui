import { Meta } from '@storybook/angular';
import { UiComponent } from './ui.component';

export default {
  title: 'UiComponent',
  component: UiComponent,
} as Meta<UiComponent>;

export const Primary = {
  render: (args: UiComponent) => ({
    props: args,
  }),
  args: {},
};
