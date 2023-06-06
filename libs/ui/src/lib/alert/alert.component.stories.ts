import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  AlertComponent,
  AlertDescriptionComponent,
  AlertTitleComponent,
} from './alert.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroBanknotesSolid,
  heroFaceFrownSolid,
} from '@ng-icons/heroicons/solid';

export default {
  title: 'Alert',
  component: AlertComponent,
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: 'select',
      description:
        'The variant controls how the element looks and potentially performs',
      options: ['default', 'destructive'],
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        AlertTitleComponent,
        AlertDescriptionComponent,
        NgIconComponent,
      ],
      providers: [provideIcons({ heroBanknotesSolid, heroFaceFrownSolid })],
    }),
  ],
} as Meta<AlertComponent>;

export const Default: StoryObj<AlertComponent> = {
  render: (args: AlertComponent) => ({
    props: args,
    template: `
      <slick-alert variant='${args.variant}'>
        <ng-icon *ngIf="${
          args.variant === 'default'
        }" name="heroBanknotesSolid" size="20" />
        <ng-icon *ngIf="${
          args.variant === 'destructive'
        }" name="heroFaceFrownSolid" size="20" />
        <slick-alert-title>${
          args.variant === 'destructive' ? 'Error' : 'Heads up!'
        }</slick-alert-title>
        <slick-alert-description>${
          args.variant === 'destructive'
            ? 'Your session has expired. Please log in again.'
            : 'You can add components to your app using the cli.'
        }</slick-alert-description>
      </slick-alert>
    `,
  }),
};
