import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { cn } from '../cn';

const baseClasses =
  'relative flex flex-col w-full rounded-lg border p-4 [&>ng-icon]:absolute [&>ng-icon]:text-foreground [&>ng-icon]:left-4 [&>ng-icon]:top-4 [&>ng-icon+div]:translate-y-[-3px] [&:has(ng-icon)]:pl-11';

export const variants = ['default', 'destructive'] as const;
export type Variant = (typeof variants)[number];
export const variantClasses: { [key in Variant]: string } = {
  default: 'bg-background text-foreground',
  destructive:
    'text-destructive border-destructive/50 dark:border-destructive [&>ng-icon]:text-destructive text-destructive',
};

const buildTwClasses = (variant: Variant = 'default'): string =>
  `${baseClasses} ${variantClasses[variant]}`;

@Component({
  selector: 'slick-alert',
  standalone: true,
  template: `
    <ng-content select="ng-icon" />
    <ng-content select="slick-alert-title" />
    <ng-content select="slick-alert-description" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input() class = '';
  @HostBinding('class')
  get hostClasses(): string {
    return cn(buildTwClasses(this._variant), this.class);
  }

  @Input()
  set variant(value: Variant) {
    this._variant = value;
  }

  private _variant: Variant = 'default';
}

@Component({
  selector: 'slick-alert-title',
  standalone: true,
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertTitleComponent {
  @Input() class = '';
  @HostBinding('class')
  get hostClasses(): string {
    return cn('mb-1 font-medium leading-none tracking-tight', this.class);
  }
}

@Component({
  selector: 'slick-alert-description',
  standalone: true,
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDescriptionComponent {
  @Input() class = '';
  @HostBinding('class')
  get hostClasses(): string {
    return cn('text-sm [&_p]:leading-relaxed', this.class);
  }
}
