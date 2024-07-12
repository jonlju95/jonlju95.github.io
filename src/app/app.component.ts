import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/themeService';
import { SidebarService } from './services/sidebarService';
import { HeaderComponent } from "./components/layout/header/header.component";
import { CookieConsentModule } from "./components/specific/cookie-consent/cookie-consent.module";
import { SidebarComponent } from "./components/layout/sidebar/sidebar.component";
import { MainWindowComponent } from "./components/layout/main-window/main-window.component";
import { FooterComponent } from "./components/layout/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CookieConsentModule, SidebarComponent, MainWindowComponent, FooterComponent],
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
