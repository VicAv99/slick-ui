import { Preview } from '@storybook/angular';

const preview: Preview = {
  // All stories expect a theme arg
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: { control: 'select', options: ['default', 'sm', 'lg'] },
  },

  // The default value of the theme arg to all stories
  args: {
    variant: 'default',
    size: 'default',
  },
};

export default preview;
