import { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
  // All stories expect a theme arg
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
      description: 'The size of the element',
      options: ['default', 'sm', 'lg'],
    },
  },

  // The default value of the theme arg to all stories
  args: {
    variant: 'default',
    size: 'default',
  },
};

export default preview;
