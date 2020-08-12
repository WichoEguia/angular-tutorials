import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-icon',
  template: `
    <i [ngClass]="classes"></i>
    <ng-content select="input"></ng-content>
  `,
  styleUrls: ['./input-icon.component.scss'],
})
export class InputIconComponent {
  @Input() icon: string;

  get classes() {
    const cssClasses = {
      fa: true,
      fas: true,
      fab: true,
    };
    cssClasses[`fa-${this.icon}`] = true;

    return cssClasses;
  }
}
