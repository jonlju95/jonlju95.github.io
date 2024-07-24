import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../app/services/theme.service';
import { LanguageService } from '../../../app/services/language.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { Router, RouterModule } from '@angular/router';
import { fadeInOut, slideSidebar } from '../../animations/component-animations';
import { SidebarService } from '../../../app/services/sidebar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgbModule, TranslateModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [slideSidebar, fadeInOut],
})
export class HeaderComponent {

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService,
    private sidebarService: SidebarService,
    private router: Router) { }

  public navigateToPage(path: string) {
    this.router.navigate([path]);
  }

  public onThemeSwitchChange() {
    this.themeService.toggleTheme();
  }

  public get currentTheme() {
    return this.themeService.currentTheme;
  }

  public onLanguageChange() {
    this.languageService.toggleLanguage();
  }

  public get currentLang() {
    return this.languageService.currentLang;
  }

  public onSidebarToggle() {
    this.sidebarService.toggleSidebar();
  }

  public get showSidebar() {
    return this.sidebarService.sidebarStatus;
  }
}
