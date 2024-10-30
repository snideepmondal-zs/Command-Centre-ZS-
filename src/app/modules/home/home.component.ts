import { Component, OnInit } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AccordianComponent } from './components/accordian/accordian.component';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NzLayoutModule, AccordianComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  items: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.items = data;
    });
  }

}
