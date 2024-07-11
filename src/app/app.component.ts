import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ThemeService } from './services/themeService';
import { SidebarComponent } from "./components/layout/sidebar/sidebar.component";
import { SidebarService } from './services/sidebarService';
import { CommonModule } from '@angular/common';
import { MainWindowComponent } from "./components/layout/main-window/main-window.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent, MainWindowComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ThemeService, SidebarService],
})
export class AppComponent implements OnInit {
  title = 'jonlju95.github.io';

  constructor(public themeService: ThemeService, public sidebarService: SidebarService) {
  }
  ngOnInit(): void {
  }
}
