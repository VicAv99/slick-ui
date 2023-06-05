import { ChangeDetectionStrategy, Component, Host } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChevronDownSolid } from '@ng-icons/heroicons/solid';
import { AccordionItemComponent } from './accordion-item.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'slick-accordion-header',
  standalone: true,
  imports: [NgIconComponent, NgIf],
  viewProviders: [provideIcons({ heroChevronDownSolid })],
  template: `
    <div
      (click)="panel.toggle()"
      class="flex justify-between w-full items-center cursor-pointer hover:underline"
    >
      <ng-content />
      <div
        class="py-4 font-medium transition-all items-center"
        [class.rotate-180]="panel.expanded"
      >
        <ng-icon
          name="heroChevronDownSolid"
          class="h-4 w-4 transition-transform duration-200"
        />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionHeaderComponent {
  constructor(@Host() public panel: AccordionItemComponent) {}
}
