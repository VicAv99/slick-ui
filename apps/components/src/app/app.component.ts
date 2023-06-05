import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AccordionComponent,
  AccordionHeaderComponent,
  AccordionItemComponent,
} from '@slick-ng';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    AccordionComponent,
    AccordionItemComponent,
    AccordionHeaderComponent,
  ],
  selector: 'components-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'components';
}
