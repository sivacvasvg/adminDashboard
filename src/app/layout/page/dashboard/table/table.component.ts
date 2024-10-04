import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,TableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Alice Brown', email: 'alice@example.com', role: 'Manager' },
    { id: 4, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
  ];
}
