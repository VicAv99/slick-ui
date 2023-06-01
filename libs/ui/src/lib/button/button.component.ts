import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { cn } from '../cn';

const base =
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';

export const variants = [
  'default',
  'destructive',
  'outline',
  'secondary',
  'ghost',
] as const;
export type Variant = (typeof variants)[number];
export const variantClasses: { [key in Variant]: string } = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive:
    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
};

export const sizes = ['default', 'sm', 'lg'] as const;
export type Size = (typeof sizes)[number];
export const sizeClasses: { [key in Size]: string } = {
  default: 'h-10 py-2 px-4',
  sm: 'h-9 px-3 rounded-md',
  lg: 'h-11 px-8 rounded-md',
};

const buildTwClasses = (
  variant: Variant = 'default',
  size: Size = 'default'
): string => cn(base, sizeClasses[size], variantClasses[variant]);

@Component({
  selector: 'button[slick-btn]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @HostBinding('class')
  private twClasses = buildTwClasses();

  private _variant: Variant = 'default';
  @Input()
  set variant(value: Variant) {
    this._variant = value;
    this.twClasses = buildTwClasses(this._variant, this._size);
  }

  private _size: Size = 'default';
  @Input()
  set size(value: Size) {
    this._size = value;
    this.twClasses = buildTwClasses(this._variant, this._size);
  }
}
