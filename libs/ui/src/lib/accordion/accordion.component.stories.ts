import {
  Meta,
  componentWrapperDecorator,
  moduleMetadata,
} from '@storybook/angular';
import { AccordionComponent } from './accordion.component';
import { AccordionHeaderComponent } from './accordion-header.component';
import { AccordionItemComponent } from './accordion-item.component';

export default {
  title: 'AccordionComponent',
  component: AccordionComponent,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    moduleMetadata({
      imports: [AccordionHeaderComponent, AccordionItemComponent],
    }),
    componentWrapperDecorator(AccordionHeaderComponent),
    componentWrapperDecorator(AccordionItemComponent),
  ],
} as Meta<AccordionComponent>;

export const Primary = {
  render: (args: AccordionComponent) => ({
    props: args,
    template: `
      <slick-accordion>
        <slick-accordion-item>
          <slick-accordion-header>Header</slick-accordion-header>
          Content
        </slick-accordion-item>
      </slick-accordion>
    `,
  }),
  args: {},
};
