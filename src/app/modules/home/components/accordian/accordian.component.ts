import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-accordian',
  standalone: true,
  imports: [CommonModule, NzCollapseModule, NzIconModule, CardComponent],
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.css'
})
export class AccordianComponent {
  @Input() 
  data: any;
}
