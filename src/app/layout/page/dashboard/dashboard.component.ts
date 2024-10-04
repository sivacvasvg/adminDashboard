import { Component } from '@angular/core';
import { TableComponent } from './table/table.component';
import { DropdownModule } from 'primeng/dropdown'; // Import DropdownModule from PrimeNG
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from "primeng/floatlabel";
import { CalendarModule } from 'primeng/calendar';
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableComponent, DropdownModule, FormsModule,FloatLabelModule,CalendarModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  cities: City[] = []; // Define an array of options
  selectedCity:any; // To store the selected city
  selectedDate: Date | undefined;
  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

}
