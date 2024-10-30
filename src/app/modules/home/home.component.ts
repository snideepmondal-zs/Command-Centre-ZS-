import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AccordianComponent } from './components/accordian/accordian.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzLayoutModule, AccordianComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
