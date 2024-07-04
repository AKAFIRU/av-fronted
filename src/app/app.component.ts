import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MatSidenavModule, MatButtonModule, SidebarComponent,MatToolbarModule,MatIconModule]
})
export class AppComponent {
  title = 's-app';
  showFiller = false;

  public isLoggedIn: boolean = false;
  
 
}
