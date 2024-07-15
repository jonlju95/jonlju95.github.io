import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarService } from '../../../services/sidebarService';
import { ThemeService } from '../../../services/themeService';
import { Subject } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../services/languageService';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NgbModule, TranslateModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  providers: []
})
export class SidebarComponent implements OnInit, OnDestroy {

  private hover = new Subject<boolean>();

  public loading: boolean = true;
  public sidebarClass: string = 'hidden';
  public sidebarHeader: string = 'fadeInHeader';
  public sidebarHeaderExpand: string = 'fadeOutHeader';
  public sidebarText: string = 'fadeOut';
  public themeSwitch: string = 'fadeOut';

  constructor(public sidebarService: SidebarService, public themeService: ThemeService, public languageService: LanguageService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.hover.complete();
  }

  public onThemeSwitchChange() {
    this.themeService.toggleTheme();
  }

  onLanguageChange() {
    const currentLang = this.languageService.getCurrentLang() === 'en' ? 'se' : 'en';
    this.languageService.toggleLanguage(currentLang);
  }

  expandSidebar(expand: boolean) {
    this.sidebarService.setActive(expand);
    this.animateSidebar(expand);
  }

  animateSidebar(expand: boolean) {
    this.sidebarClass = expand ? 'expanded' : 'hidden';
    this.sidebarHeader = expand ? 'fadeOutHeader' : 'fadeInHeader';
    this.sidebarHeaderExpand = expand ? 'fadeInHeader' : 'fadeOutHeader';
    this.sidebarText = expand ? 'fadeIn' : 'fadeOut';
    this.themeSwitch = expand ? 'fadeIn' : 'fadeOut';
  }
}
