import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { cn } from '../cn';

const baseClasses =
  'inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';

export const variants = [
  'default',
  'destructive',
  'outline',
  'secondary',
] as const;
export type Variant = (typeof variants)[number];
export const variantClasses: { [key in Variant]: string } = {
  default:
    'bg-primary hover:bg-primary/80 border-transparent text-primary-foreground',
  destructive:
    'bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground',
  outline: 'text-foreground',
  secondary:
    'bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground',
};

const buildTwClasses = (variant: Variant = 'default'): string =>
  `${baseClasses} ${variantClasses[variant]}`;

@Component({
  selector: 'slick-badge',
  standalone: true,
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  private _variant: Variant = 'default';

  @Input() class = '';
  @HostBinding('class')
  get hostClasses(): string {
    return cn(buildTwClasses(this._variant), this.class);
  }

  @Input()
  set variant(value: Variant) {
    this._variant = value;
  }
}
