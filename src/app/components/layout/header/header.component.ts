import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/themeService';
import { LanguageService } from '../../../services/languageService';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgbModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public themeService: ThemeService, public languageService: LanguageService) { }

  public onThemeSwitchChange() {
    this.themeService.toggleTheme();
  }

  public onLanguageChange() {
    const currentLang = this.languageService.getCurrentLang() === 'en' ? 'se' : 'en';
    this.languageService.setLanguage(currentLang);
  }
}
