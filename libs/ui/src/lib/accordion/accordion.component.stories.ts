import { Meta, moduleMetadata } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';
import { AccordionHeaderComponent } from './accordion-header.component';
import { AccordionItemComponent } from './accordion-item.component';

export default {
  title: 'Accordion',
  component: AccordionComponent,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    moduleMetadata({
      imports: [AccordionHeaderComponent, AccordionItemComponent],
    }),
  ],
} as Meta<AccordionComponent>;

export const Default = {
  render: (args: AccordionComponent) => ({
    props: args,
    template: `
        <slick-accordion>
          <slick-accordion-item>
            <slick-accordion-header>Header 1</slick-accordion-header>
            Content 1
          </slick-accordion-item>
          <slick-accordion-item>
            <slick-accordion-header>Header 2</slick-accordion-header>
            Content 2
          </slick-accordion-item>
          <slick-accordion-item>
            <slick-accordion-header>Header 3</slick-accordion-header>
            Content 3
          </slick-accordion-item>
        </slick-accordion>
    `,
  }),
  args: {},
};
