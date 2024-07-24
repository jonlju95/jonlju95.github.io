import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChildrenOutletContexts, RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { CookieConsentModule } from "../shared/components/cookie-consent/cookie-consent.module";
import { LanguageService } from './services/language.service';
import { SidebarService } from './services/sidebar.service';
import { ThemeService } from './services/theme.service';
import { CommonModule } from '@angular/common';
import { routeTransition } from '../shared/animations/route-animations';
import { FooterComponent } from "../shared/components/footer/footer.component";
import { SidebarComponent } from "../shared/components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    CookieConsentModule,
    CommonModule,
    SidebarComponent
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
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'jonlju95.github.io';
  isOpen = false;

  constructor(
    private contexts: ChildrenOutletContexts,
    private sidebarService: SidebarService) {
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

  get showSidebar() {
    return this.sidebarService.sidebarStatus;
  }
}
