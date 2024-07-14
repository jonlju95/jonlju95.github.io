import { Injectable } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public langs = ['en', 'se'];

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('se');
    translateService.use('se');
  }

  setLanguage(lang: string): void {
    this.translateService.use(lang);
  }

  getCurrentLang(): string {
    return this.translateService.currentLang;
  }
}
