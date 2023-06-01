import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
} as Meta<ButtonComponent>;

export const Default: StoryObj<ButtonComponent> = {
  render: (args: ButtonComponent) => ({
    props: args,
    template: `<button slick-btn variant="${args.variant}" size=${args.size}>Button</button>`,
  }),
};

export const Link: StoryObj<ButtonComponent> = {
  render: (args: ButtonComponent) => ({
    props: args,
    template: `<a slick-btn variant="link" size=${args.size}>Button</a>`,
  }),
  argTypes: {
    variant: {
      control: false,
    },
  },
};
