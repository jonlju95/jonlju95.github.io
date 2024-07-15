import { DOCUMENT, isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly consentKey = 'cookieConsent';
  public langs = ['en', 'se'];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
    private cookieService: CookieService,
    private translateService: TranslateService) {
    this.loadLanguage();
  }

  public loadLanguage(lang: string): void {
    if (isPlatformBrowser(this.platformId) && this.cookieService.get(this.consentKey)) {
      this.translateService.use(lang);
    }
  }

  setLanguage(lang: string): void {
    if (isPlatformBrowser(this.platformId)) {
      this.translateService.use(lang);
    }
  }

  getCurrentLang(): string {
    return this.translateService.currentLang;
  }
}
