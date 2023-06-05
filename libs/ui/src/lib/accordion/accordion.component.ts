import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkAccordion } from '@angular/cdk/accordion';

@Component({
  selector: 'slick-accordion',
  standalone: true,
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent extends CdkAccordion {}
