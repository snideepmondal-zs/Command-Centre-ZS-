import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AccordianComponent } from '../../shared/components/accordian/accordian.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzLayoutModule, AccordianComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  panels = [
    {
      active: false,
      disabled: false,
      name: 'Portfolio Overview',
      customStyle: {
        background: '#f7f7f7',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px'
      }
    },
  ];
}
