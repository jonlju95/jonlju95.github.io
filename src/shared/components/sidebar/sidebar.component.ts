import { Component, ElementRef, HostListener } from '@angular/core';
import { fadeInOut, slideSidebar } from '../../animations/component-animations';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from '../../../app/services/language.service';
import { SidebarService } from '../../../app/services/sidebar.service';
import { ThemeService } from '../../../app/services/theme.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { OutsideClickDirective } from '../../directives/outside-click.directive';
import { SlideToggleComponent } from "../slide-toggle/slide-toggle.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    NgbModule,
    TranslateModule,
    RouterModule,
    OutsideClickDirective,
    SlideToggleComponent
],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations: [slideSidebar, fadeInOut],
})
export class SidebarComponent {

  constructor(
    private themeService: ThemeService,
    private languageService: LanguageService,
    private sidebarService: SidebarService,
    public router: Router,
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
    this.sidebarService.toggleSidebar();
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
