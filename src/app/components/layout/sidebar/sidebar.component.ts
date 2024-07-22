import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { slideSidebar } from '../../../shared/component-animations';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from '../../../services/language.service';
import { SidebarService } from '../../../services/sidebar.service';
import { ThemeService } from '../../../services/theme.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { OutsideClickDirective } from '../../../directives/outside-click.directive';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NgbModule, TranslateModule, RouterModule, OutsideClickDirective],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [slideSidebar],
})
export class SidebarComponent {

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService,
    private sidebarService: SidebarService,
    private router: Router,
    private el: ElementRef) { }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    const sidebarToggleButton = document.getElementById('sidebar-toggle');
    if (sidebarToggleButton && (sidebarToggleButton === event.target || sidebarToggleButton.contains(event.target))) {
      return; // Do nothing if the button or its children were clicked
    }

    const clickedInside = this.el.nativeElement.contains(event.target);
    if (!clickedInside && this.sidebarService.sidebarStatus) {
      this.sidebarService.toggleSidebar();
    }
  }

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
