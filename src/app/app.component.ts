import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from "./components/layout/footer/footer.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { CookieConsentModule } from "./components/specific/cookie-consent/cookie-consent.module";
import { LanguageService } from './services/languageService';
import { SidebarService } from './services/sidebarService';
import { ThemeService } from './services/themeService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CookieConsentModule,
    HomeComponent,
    FooterComponent,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    ThemeService,
    SidebarService,
    LanguageService,
    TranslateModule]
})
export class AppComponent implements OnInit {
  title = 'jonlju95.github.io';

  constructor(
    public themeService: ThemeService,
    public sidebarService: SidebarService,
    public languageService: LanguageService) {
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener("load", () => {
        document.body.classList.remove("preload");
      });
    }
  }
}
