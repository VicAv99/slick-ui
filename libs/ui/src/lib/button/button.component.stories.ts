import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
} as Meta<ButtonComponent>;

export const Primary: StoryObj<ButtonComponent> = {
  render: (args: ButtonComponent) => ({
    props: args,
    template: `<button slick-btn variant="${args.variant}" size=${args.size}>Button</button>`,
  }),
};
