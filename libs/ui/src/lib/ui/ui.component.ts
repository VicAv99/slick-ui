import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'slick-ui',
  standalone: true,
  imports: [CommonModule],
  template: `<p>ui works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiComponent {}
