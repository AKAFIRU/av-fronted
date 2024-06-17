import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatDividerModule, MatListModule,MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isComercializacionOpen: boolean = false;

  toggleComercializacion() {
    this.isComercializacionOpen = !this.isComercializacionOpen;
  }

  constructor() {}

  logout() {
    
  }
}
