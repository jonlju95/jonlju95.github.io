import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts, Router, RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from "./components/layout/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { CookieConsentModule } from "./components/specific/cookie-consent/cookie-consent.module";
import { LanguageService } from './services/language.service';
import { SidebarService } from './services/sidebar.service';
import { ThemeService } from './services/theme.service';
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
  isOpen = false;

  constructor(
    private contexts: ChildrenOutletContexts,
    private router: Router) {
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
