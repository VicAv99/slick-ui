import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
  args: {
    size: 'default',
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: 'select',
      description:
        'The variant controls how the element looks and potentially performs',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: {
      control: 'select',
      defaultValue: 'default',
      description: 'The size of the element',
      options: ['default', 'sm', 'lg'],
    },
  },
} as Meta<ButtonComponent>;

export const Default: StoryObj<ButtonComponent> = {
  render: (args: ButtonComponent) => ({
    props: args,
    template: `<button slick-btn variant="${args.variant}" size=${args.size}>Button</button>`,
  }),
};
