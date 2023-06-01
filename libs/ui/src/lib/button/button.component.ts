import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'slick-btn',
  standalone: true,
  imports: [],
  template: `<p class=" text-teal-300 uppercase">button works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
