import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from "./components/layout/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { CookieConsentModule } from "./components/specific/cookie-consent/cookie-consent.module";
import { LanguageService } from './services/languageService';
import { SidebarService } from './services/sidebarService';
import { ThemeService } from './services/themeService';
import { CommonModule } from '@angular/common';
import { routeTransition } from './shared/route-animations';
import { FooterComponent } from "./components/layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    CookieConsentModule,
    HomeComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    ThemeService,
    SidebarService,
    LanguageService,
    TranslateModule],
  animations: [
    routeTransition
  ]
})
export class AppComponent implements OnInit {
  title = 'jonlju95.github.io';

  constructor(
    public themeService: ThemeService,
    public sidebarService: SidebarService,
    public languageService: LanguageService,
    private contexts: ChildrenOutletContexts) {
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener("load", () => {
        document.body.classList.remove("preload");
      });
    }
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
