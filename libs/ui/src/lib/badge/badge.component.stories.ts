import { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

export default {
  title: 'Badge',
  component: BadgeComponent,
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: 'select',
      description:
        'The variant controls how the element looks and potentially performs',
      options: ['default', 'destructive', 'outline', 'secondary'],
    },
  },
} as Meta<BadgeComponent>;

export const Default: StoryObj<BadgeComponent> = {
  render: (args: BadgeComponent) => ({
    props: args,
    template: `<slick-badge variant="${args.variant}">Badge</slick-badge>`,
  }),
};
