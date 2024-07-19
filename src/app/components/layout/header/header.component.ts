import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/themeService';
import { LanguageService } from '../../../services/languageService';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgbModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public currentTheme: string = '';
  public currentLang: string = '';

  constructor(public themeService: ThemeService, public languageService: LanguageService, private router: Router) { }

  ngOnInit(): void {
    this.currentTheme = this.themeService.currentTheme;
    this.currentLang = this.languageService.getCurrentLang();
  }

  public onThemeSwitchChange() {
    this.themeService.toggleTheme();
  }

  public onLanguageChange() {
    this.languageService.toggleLanguage();
  }

  public navigateToPage(path: string) {
    this.router.navigate([path]);
  }
}
