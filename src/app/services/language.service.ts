import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly langKey = 'lang';
  private readonly consentKey = 'cookieConsent';
  public langs = ['en', 'se'];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
    private cookieService: CookieService,
    private translateService: TranslateService) {
    this.loadLanguage();
  }

  toggleLanguage(): void {
    const currentLang = this.translateService.currentLang;
    const newLang = currentLang === 'en' ? 'se' : 'en';
    this.translateService.use(newLang);
    if (isPlatformBrowser(this.platformId) && this.cookieService.get(this.consentKey) === 'true') {
      this.cookieService.set(this.langKey, newLang, { path: '/' });
    }
  }

  getCurrentLang(): string {
    return this.translateService.currentLang || 'se';
  }

  loadLanguage(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = this.cookieService.get(this.langKey) || 'en';
      const lang = this.langs.includes(savedLang) ? savedLang : 'en';
      this.translateService.use(lang);
    }
  }
}
