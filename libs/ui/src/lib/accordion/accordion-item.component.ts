import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkAccordionItem } from '@angular/cdk/accordion';

@Component({
  selector: 'slick-accordion-item',
  standalone: true,
  styles: [
    `
      .active {
        @apply p-3 block;
      }
    `,
  ],
  template: `
    <div class="border-b" #body>
      <ng-content select="slick-accordion-header"></ng-content>
      <div
        class="overflow-hidden text-sm transition-all hidden w-full"
        [class.active]="expanded"
        [class.animate-accordion-up]="expanded"
        [class.animate-accordion-down]="!expanded"
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemComponent extends CdkAccordionItem {}
